"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileUtils_1 = require("../../utils/fileUtils");
const path_1 = __importDefault(require("path"));
const filePath = (filename) => path_1.default.join(__dirname, '..', '..', '..', 'src', 'asset', 'full', filename + '.jpg');
describe('FileUtils Test', () => {
    it('getResizeImagePath: Get system file name', () => {
        const fileName = 'image1';
        const width = 200;
        const height = 200;
        const result = (0, fileUtils_1.getResizeImagePath)(fileName, 200, 200);
        expect(result.filePath).toContain(`src/asset/full/${fileName}.jpg`);
        expect(result.resultFilePath).toContain(`src/asset/thumb/${fileName}_${width}_${height}.jpg`);
    });
    it('checkExistFile: exist file image1', () => {
        const file = filePath('image1');
        const isExist = (0, fileUtils_1.checkExistFile)(file);
        expect(isExist).toBe(true);
    });
    it('checkExistFile: not exist file image99', () => {
        const file = filePath('image99');
        const isExist = (0, fileUtils_1.checkExistFile)(file);
        expect(isExist).toBe(false);
    });
});
