"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
    .then(response => {
    console.log(response.data);
})
    .catch(error => {
    console.log(error);
});
