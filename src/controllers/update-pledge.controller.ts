/* eslint-disable @typescript-eslint/no-explicit-any */
import { operation, param, requestBody } from '@loopback/rest';
import { UpdatePledge } from '../models/update-pledge.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient'

let blockchainClient = new BlockChainModule.BlockchainClient();


/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by UpdatePledgeController
 *
 */
export class UpdatePledgeController {
  constructor() { }

  /**
   *
   *

   * @param _requestBody
   * @returns ResponseMessage model instance
   */
  @operation('post', '/UpdatePledge')
  async updatePledgeCreate(@requestBody() _requestBody: UpdatePledge): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      if (networkObj && !(networkObj.stack)) {
        // Construct data object that serves as
        let inputObj = {
          function: 'updatePledge',
          contract: networkObj.contract,
          pledgeId: _requestBody.pledgeId,
          fundingType: _requestBody.fundingType,
          approvedFunding: _requestBody.approvedFunding,
          fundsPerInstallment: _requestBody.fundsPerInstallment
        };
        await blockchainClient.updatePledge(inputObj);
      } else {
        // Couldn't connect to network, so passing this object on to catch
        throw new Error(networkObj.message);
      }
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: 'Updated project pledge ' + _requestBody.pledgeId
      });
      return responseMessage;
    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: error.message, statusCode: '400'
      });
      return responseMessage;
    }
  }

}

