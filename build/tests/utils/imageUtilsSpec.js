"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageUtils_1 = require("../../utils/imageUtils");
describe('Image transform function should resolve or reject ', () => {
    it('Expect transform to not throw error', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageUtils_1.resizeImage)('image1', {
            size: { width: 200, height: 200 },
        })).toBeResolved();
    }));
    it('Expect transform to throw specific error', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imageUtils_1.resizeImage)('image99', {
            size: { width: 200, height: 200 },
        })).toBeRejectedWith(new Error('Image not found'));
    }));
});
