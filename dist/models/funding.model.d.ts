/**
 * The model class is generated from OpenAPI schema - Funding
 * Funding
 */
export declare class Funding {
    constructor(data?: Partial<Funding>);
    /**
     *
     */
    fundingType: string;
    /**
     *
     */
    nextFundingDueInDays: number;
    /**
     *
     */
    approvedFunding: number;
    /**
     *
     */
    totalFundsReceived: number;
    /**
     *
     */
    fundsPerInstallment: number;
    /**
     *
     */
    govOrgId: string;
}
