/* eslint-disable @typescript-eslint/no-explicit-any */
import { operation, param, requestBody } from '@loopback/rest';
import { ProjectPledge } from '../models/project-pledge.model';
import { BlockChainModule } from '../blockchainClient'

let blockchainClient = new BlockChainModule.BlockchainClient();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by ProjectPledgeController
 *
 */
export class ProjectPledgeController {
  constructor() { }

  /**
   *
   *

   * @param id
   * @returns ProjectPledge model instance
   */
  @operation('get', '/ProjectPledge/{id}')
  async projectPledgeFindById(@param({ name: 'id', in: 'path' }) id: string): Promise<ProjectPledge> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      if (networkObj && !(networkObj.stack)) {
        let inputObj = {
          function: 'readProjectPledge',
          contract: networkObj.contract,
          id: id
        };
        return await blockchainClient.queryProject(inputObj);
      } else {
        // Couldn't connect to network, so passing this object on to catch clause...
        throw new Error(networkObj.message);
      }
    } catch (error) {
      return error;
    }
  }

}

