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
const transfer_funds_model_1 = require("../models/transfer-funds.model");
const response_message_model_1 = require("../models/response-message.model");
const blockchainClient_1 = require("../blockchainClient");
let blockchainClient = new blockchainClient_1.BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by TransferFundsController
 *
 */
class TransferFundsController {
    constructor() { }
    /**
     *
     *
  
     * @param _requestBody
     * @returns ResponseMessage model instance
     */
    async transferFundsCreate(_requestBody) {
        try {
            let networkObj = await blockchainClient.connectToNetwork();
            if (networkObj && !(networkObj.stack)) {
                // Construct data object that serves as
                let inputObj = {
                    function: 'transferFunds',
                    contract: networkObj.contract,
                    pledgeId: _requestBody.pledgeId
                };
                await blockchainClient.transferFunds(inputObj);
            }
            else {
                // Couldn't connect to network, so passing this object on to catch
                throw new Error(networkObj.message);
            }
            let responseMessage = new response_message_model_1.ResponseMessage({
                message: 'Total funds received incremented for project pledge ' +
                    _requestBody.pledgeId
            });
            return responseMessage;
        }
        catch (error) {
            let responseMessage = new response_message_model_1.ResponseMessage({
                message: error, statusCode: '400'
            });
            return responseMessage;
        }
    }
}
__decorate([
    rest_1.operation('post', '/TransferFunds'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_funds_model_1.TransferFunds]),
    __metadata("design:returntype", Promise)
], TransferFundsController.prototype, "transferFundsCreate", null);
exports.TransferFundsController = TransferFundsController;
//# sourceMappingURL=transfer-funds.controller.js.map