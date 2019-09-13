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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const repository_1 = require("@loopback/repository");
/**
 * The model class is generated from OpenAPI schema - ResponseMessage
 * ResponseMessage
 */
let ResponseMessage = class ResponseMessage {
    constructor(data) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }
};
__decorate([
    repository_1.property({ required: true }),
    __metadata("design:type", String)
], ResponseMessage.prototype, "message", void 0);
__decorate([
    repository_1.property({ required: true }),
    __metadata("design:type", String)
], ResponseMessage.prototype, "statusCode", void 0);
ResponseMessage = __decorate([
    repository_1.model({ name: 'ResponseMessage' }),
    __metadata("design:paramtypes", [Object])
], ResponseMessage);
exports.ResponseMessage = ResponseMessage;
//# sourceMappingURL=response-message.model.js.map