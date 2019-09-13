/* eslint-disable @typescript-eslint/no-explicit-any */
import { operation, param, requestBody } from '@loopback/rest';
import { CreateProjectPledge } from '../models/create-project-pledge.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient'

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by CreateProjectPledgeController
 *
 */
export class CreateProjectPledgeController {
  constructor() { }

  /**
   *
   *

   * @param _requestBody
   * @returns ResponseMessage model instance
   */
  @operation('post', '/CreateProjectPledge')
  async createProjectPledgeCreate(@requestBody() _requestBody: CreateProjectPledge): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      if (networkObj && !(networkObj.stack)) {
        // Construct data object that serves as
        let inputObj = {
          function: 'createProjectPledge',
          contract: networkObj.contract,
          pledgeNumber: _requestBody.pledgeNumber,
          name: _requestBody.name,
          desc: _requestBody.description,
          fundsRequired: _requestBody.fundsRequired,
          aidOrg: _requestBody.aidOrg
        };
        await blockchainClient.createProjectPledge(inputObj);
      } else {
        // Couldn't connect to network, so passing this object on to catch
        throw new Error(networkObj.message);
      }
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: 'added project pledge'
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

