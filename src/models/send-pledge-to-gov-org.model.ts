/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - SendPledgeToGovOrg
 * SendPledgeToGovOrg
 */
@model({name: 'SendPledgeToGovOrg'})
export class SendPledgeToGovOrg {
  constructor(data?: Partial<SendPledgeToGovOrg>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({required: true})
  pledgeId: string;

}

