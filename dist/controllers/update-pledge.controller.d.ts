import { UpdatePledge } from '../models/update-pledge.model';
import { ResponseMessage } from '../models/response-message.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by UpdatePledgeController
 *
 */
export declare class UpdatePledgeController {
    constructor();
    /**
     *
     *
  
     * @param _requestBody
     * @returns ResponseMessage model instance
     */
    updatePledgeCreate(_requestBody: UpdatePledge): Promise<ResponseMessage>;
}
