import { TransferFunds } from '../models/transfer-funds.model';
import { ResponseMessage } from '../models/response-message.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by TransferFundsController
 *
 */
export declare class TransferFundsController {
    constructor();
    /**
     *
     *
  
     * @param _requestBody
     * @returns ResponseMessage model instance
     */
    transferFundsCreate(_requestBody: TransferFunds): Promise<ResponseMessage>;
}
