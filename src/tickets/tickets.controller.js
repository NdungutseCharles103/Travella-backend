"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.TicketsController = void 0;
var openapi = require("@nestjs/swagger");
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
var common_1 = require("@nestjs/common");
var resHandler_1 = require("../utils/resHandler");
var swagger_1 = require("@nestjs/swagger");
var TicketsController = /** @class */ (function () {
    function TicketsController(ticketsService) {
        this.ticketsService = ticketsService;
    }
    TicketsController.prototype.create = function (ticket) {
        return __awaiter(this, void 0, void 0, function () {
            var newTicket, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ticketsService.create(ticket)];
                    case 1:
                        newTicket = _a.sent();
                        return [2 /*return*/, new common_1.HttpException({ message: "Ticket created successfully", data: newTicket }, 201)];
                    case 2:
                        error_1 = _a.sent();
                        (0, resHandler_1.resHandler)(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TicketsController.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tickets, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ticketsService.findAll()];
                    case 1:
                        tickets = _a.sent();
                        return [2 /*return*/, new common_1.HttpException({ message: " All Tickets ", data: tickets }, 200)];
                    case 2:
                        error_2 = _a.sent();
                        (0, resHandler_1.resHandler)(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TicketsController.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ticket, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ticketsService.findOne(id)];
                    case 1:
                        ticket = _a.sent();
                        return [2 /*return*/, new common_1.HttpException({ data: ticket }, 200)];
                    case 2:
                        error_3 = _a.sent();
                        (0, resHandler_1.resHandler)(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TicketsController.prototype.update = function (id, ticket) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedTicket, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ticketsService.update(id, ticket)];
                    case 1:
                        updatedTicket = _a.sent();
                        return [2 /*return*/, new common_1.HttpException({ message: "Ticket updated successfully", data: updatedTicket }, 200)];
                    case 2:
                        error_4 = _a.sent();
                        (0, resHandler_1.resHandler)(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TicketsController.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedTicket, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.ticketsService.remove(id)];
                    case 1:
                        deletedTicket = _a.sent();
                        return [2 /*return*/, new common_1.HttpException({ message: "Ticket deleted successfully", data: deletedTicket }, 200)];
                    case 2:
                        error_5 = _a.sent();
                        (0, resHandler_1.resHandler)(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201 }),
        __param(0, (0, common_1.Body)())
    ], TicketsController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200 })
    ], TicketsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, (0, common_1.Param)('id'))
    ], TicketsController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TicketsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, (0, common_1.Param)('id'))
    ], TicketsController.prototype, "remove");
    TicketsController = __decorate([
        (0, swagger_1.ApiTags)('Tickets'),
        (0, common_1.Controller)('tickets')
    ], TicketsController);
    return TicketsController;
}());
exports.TicketsController = TicketsController;
