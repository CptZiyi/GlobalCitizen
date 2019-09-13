/* eslint-disable @typescript-eslint/no-explicit-any */
import { operation, param, requestBody } from '@loopback/rest';
import { TransferFunds } from '../models/transfer-funds.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient'

let blockchainClient = new BlockChainModule.BlockchainClient();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by TransferFundsController
 *
 */
export class TransferFundsController {
  constructor() { }

  /**
   *
   *

   * @param _requestBody
   * @returns ResponseMessage model instance
   */
  @operation('post', '/TransferFunds')
  async transferFundsCreate(@requestBody() _requestBody: TransferFunds): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      if (networkObj && !(networkObj.stack)) {
        // Construct data object that serves as
        let inputObj = {
          function: 'transferFunds',
          contract: networkObj.contract,
          pledgeId: _requestBody.pledgeId
        };
        await blockchainClient.transferFunds(inputObj);
      } else {
        // Couldn't connect to network, so passing this object on to catch
        throw new Error(networkObj.message);
      }
      let responseMessage: ResponseMessage = new ResponseMessage({
        message: 'Total funds received incremented for project pledge ' +
          _requestBody.pledgeId
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

