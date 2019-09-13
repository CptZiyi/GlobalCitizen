import { ProjectPledge } from '../models/project-pledge.model';
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by ProjectPledgeController
 *
 */
export declare class ProjectPledgeController {
    constructor();
    /**
     *
     *
  
     * @param id
     * @returns ProjectPledge model instance
     */
    projectPledgeFindById(id: string): Promise<ProjectPledge>;
}
