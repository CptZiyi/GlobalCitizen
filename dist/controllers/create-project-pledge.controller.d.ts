import { CreateProjectPledge } from '../models/create-project-pledge.model';
import { ResponseMessage } from '../models/response-message.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by CreateProjectPledgeController
 *
 */
export declare class CreateProjectPledgeController {
    constructor();
    /**
     *
     *
  
     * @param _requestBody
     * @returns ResponseMessage model instance
     */
    createProjectPledgeCreate(_requestBody: CreateProjectPledge): Promise<ResponseMessage>;
}
