/* eslint-disable @typescript-eslint/no-explicit-any */
import { operation, param, requestBody } from '@loopback/rest';
import { SendPledgeToGovOrg } from '../models/send-pledge-to-gov-org.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient'

let blockchainClient = new BlockChainModule.BlockchainClient();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by SendPledgeToGovOrgController
 *
 */
export class SendPledgeToGovOrgController {
  constructor() { }

  /**
   *
   *

   * @param _requestBody
   * @returns ResponseMessage model instance
   */
  @operation('post', '/SendPledgeToGovOrg')
  async sendPledgeToGovOrgCreate(@requestBody() _requestBody: SendPledgeToGovOrg): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      if (networkObj && !(networkObj.stack)) {
        // Construct data object that serves as
        let inputObj = {
          function: 'sendPledgeToGovOrg',
          contract: networkObj.contract,
          pledgeId: _requestBody.pledgeId
        };
        await blockchainClient.sendPledgeToGovOrg(inputObj);
      } else {
        // Couldn't connect to network, so passing this object on to catch
        throw new Error(networkObj.message);
      }
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: 'Sent project pledge ' + _requestBody.pledgeId + ' to governmentorg for review...'
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

