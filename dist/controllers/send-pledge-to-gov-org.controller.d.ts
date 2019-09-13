import { SendPledgeToGovOrg } from '../models/send-pledge-to-gov-org.model';
import { ResponseMessage } from '../models/response-message.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by SendPledgeToGovOrgController
 *
 */
export declare class SendPledgeToGovOrgController {
    constructor();
    /**
     *
     *
  
     * @param _requestBody
     * @returns ResponseMessage model instance
     */
    sendPledgeToGovOrgCreate(_requestBody: SendPledgeToGovOrg): Promise<ResponseMessage>;
}
