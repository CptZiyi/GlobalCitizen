"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const rest_1 = require("@loopback/rest");
const blockchainClient_1 = require("../blockchainClient");
let blockchainClient = new blockchainClient_1.BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by ProjectPledgeController
 *
 */
class ProjectPledgeController {
    constructor() { }
    /**
     *
     *
  
     * @param id
     * @returns ProjectPledge model instance
     */
    async projectPledgeFindById(id) {
        try {
            let networkObj = await blockchainClient.connectToNetwork();
            if (networkObj && !(networkObj.stack)) {
                let inputObj = {
                    function: 'readProjectPledge',
                    contract: networkObj.contract,
                    id: id
                };
                return await blockchainClient.queryProject(inputObj);
            }
            else {
                // Couldn't connect to network, so passing this object on to catch clause...
                throw new Error(networkObj.message);
            }
        }
        catch (error) {
            return error;
        }
    }
}
__decorate([
    rest_1.operation('get', '/ProjectPledge/{id}'),
    __param(0, rest_1.param({ name: 'id', in: 'path' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectPledgeController.prototype, "projectPledgeFindById", null);
exports.ProjectPledgeController = ProjectPledgeController;
//# sourceMappingURL=project-pledge.controller.js.map