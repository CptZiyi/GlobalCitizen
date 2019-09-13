import { Funding } from './funding.model';
/**
 * The model class is generated from OpenAPI schema - ProjectPledge
 * ProjectPledge
 */
export declare class ProjectPledge {
    constructor(data?: Partial<ProjectPledge>);
    /**
     *
     */
    pledgeId: string;
    /**
     *
     */
    name: string;
    /**
     *
     */
    decription: string;
    /**
     *
     */
    fundsRequired: number;
    /**
     *
     */
    status: string;
    /**
     *
     */
    aidOrg: string;
    /**
     *
     */
    funds?: Funding[];
}
