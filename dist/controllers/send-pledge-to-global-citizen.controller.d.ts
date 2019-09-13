import { SendPledgeToGlobalCitizen } from '../models/send-pledge-to-global-citizen.model';
import { ResponseMessage } from '../models/response-message.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by SendPledgeToGlobalCitizenController
 *
 */
export declare class SendPledgeToGlobalCitizenController {
    constructor();
    /**
     *
     *
  
     * @param _requestBody
     * @returns ResponseMessage model instance
     */
    sendPledgeToGlobalCitizenCreate(_requestBody: SendPledgeToGlobalCitizen): Promise<ResponseMessage>;
}
