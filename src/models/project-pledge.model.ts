/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';
import {Funding} from './funding.model';

/**
 * The model class is generated from OpenAPI schema - ProjectPledge
 * ProjectPledge
 */
@model({name: 'ProjectPledge'})
export class ProjectPledge {
  constructor(data?: Partial<ProjectPledge>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({required: true})
  pledgeId: string;

  /**
   * 
   */
  @property({required: true})
  name: string;

  /**
   * 
   */
  @property({required: true})
  decription: string;

  /**
   * 
   */
  @property({required: true})
  fundsRequired: number;

  /**
   * 
   */
  @property({required: true})
  status: string;

  /**
   * 
   */
  @property({required: true})
  aidOrg: string;

  /**
   * 
   */
  @property.array(Funding)
  funds?: Funding[];

}

