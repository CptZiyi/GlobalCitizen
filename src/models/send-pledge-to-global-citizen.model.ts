/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - SendPledgeToGlobalCitizen
 * SendPledgeToGlobalCitizen
 */
@model({name: 'SendPledgeToGlobalCitizen'})
export class SendPledgeToGlobalCitizen {
  constructor(data?: Partial<SendPledgeToGlobalCitizen>) {
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

