"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TicketsModule = void 0;
var common_1 = require("@nestjs/common");
var tickets_service_1 = require("./tickets.service");
var tickets_controller_1 = require("./tickets.controller");
var mongoose_1 = require("@nestjs/mongoose");
var ticket_schama_1 = require("../schemas/ticket.schama");
var TicketsModule = /** @class */ (function () {
    function TicketsModule() {
    }
    TicketsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{
                        name: 'Ticket',
                        schema: ticket_schama_1.TicketSchema
                    }]),
            ],
            controllers: [tickets_controller_1.TicketsController],
            providers: [tickets_service_1.TicketsService]
        })
    ], TicketsModule);
    return TicketsModule;
}());
exports.TicketsModule = TicketsModule;
