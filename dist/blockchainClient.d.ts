export declare module BlockChainModule {
    class BlockchainClient {
        connectToNetwork(): Promise<any>;
        disconnectFromNetwork(): Promise<any>;
        createProjectPledge(args: any): Promise<any>;
        sendPledgeToGlobalCitizen(args: any): Promise<any>;
        sendPledgeToGovOrg(args: any): Promise<any>;
        updatePledge(args: any): Promise<any>;
        transferFunds(args: any): Promise<any>;
        queryProject(args: any): Promise<any>;
    }
}
