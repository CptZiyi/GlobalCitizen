/* eslint-disable @typescript-eslint/no-explicit-any */
import { operation, param, requestBody } from '@loopback/rest';
import { SendPledgeToGlobalCitizen } from '../models/send-pledge-to-global-citizen.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient'

let blockchainClient = new BlockChainModule.BlockchainClient();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by SendPledgeToGlobalCitizenController
 *
 */
export class SendPledgeToGlobalCitizenController {
  constructor() { }

  /**
   *
   *

   * @param _requestBody
   * @returns ResponseMessage model instance
   */
  @operation('post', '/SendPledgeToGlobalCitizen')
  async sendPledgeToGlobalCitizenCreate(@requestBody() _requestBody: SendPledgeToGlobalCitizen): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      if (networkObj && !(networkObj.stack)) {
        // Construct data object that serves as
        let inputObj = {
          function: 'sendPledgeToGlobalCitizen',
          contract: networkObj.contract,
          pledgeId: _requestBody.pledgeId
        };
        await blockchainClient.sendPledgeToGlobalCitizen(inputObj);
      } else {
        // Couldn't connect to network, so passing this object on to catch
        throw new Error(networkObj.message);
      }
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: 'Sent project pledge ' + _requestBody.pledgeId + ' to citizen org for review...'
      });
      return responseMessage;
    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: error, statusCode: '400'
      });
      return responseMessage;
    }
  }

}

