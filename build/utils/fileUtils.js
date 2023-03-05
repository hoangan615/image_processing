"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistFile = exports.getResizeImagePath = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Get the path based on filename
 * @param filename The file name to display
 * @param width The width of the image
 * @param height The height of the image
 * @returns
 */
const getResizeImagePath = (filename, width, height) => {
    const filePath = path_1.default.join(__dirname, '..', '..', 'src', 'asset', 'full', filename + '.jpg');
    const resultFilePath = path_1.default.join(__dirname, '..', '..', 'src', 'asset', 'thumb', `${filename}_${width}_${height}.jpg`);
    return {
        filePath,
        resultFilePath,
    };
};
exports.getResizeImagePath = getResizeImagePath;
/**
 * Check the file exist
 * @param file The file path
 * @returns true if the file exists, false otherwise
 */
const checkExistFile = (file) => {
    if (fs_1.default.existsSync(file)) {
        return true;
    }
    return false;
};
exports.checkExistFile = checkExistFile;
