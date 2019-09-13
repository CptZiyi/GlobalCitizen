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
 * The model class is generated from OpenAPI schema - UpdatePledge
 * UpdatePledge
 */
let UpdatePledge = class UpdatePledge {
    constructor(data) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }
};
__decorate([
    repository_1.property({ required: true }),
    __metadata("design:type", String)
], UpdatePledge.prototype, "pledgeId", void 0);
__decorate([
    repository_1.property({ required: true }),
    __metadata("design:type", String)
], UpdatePledge.prototype, "fundingType", void 0);
__decorate([
    repository_1.property({ required: true }),
    __metadata("design:type", String)
], UpdatePledge.prototype, "approvedFunding", void 0);
__decorate([
    repository_1.property({ required: true }),
    __metadata("design:type", String)
], UpdatePledge.prototype, "fundsPerInstallment", void 0);
UpdatePledge = __decorate([
    repository_1.model({ name: 'UpdatePledge' }),
    __metadata("design:paramtypes", [Object])
], UpdatePledge);
exports.UpdatePledge = UpdatePledge;
//# sourceMappingURL=update-pledge.model.js.map