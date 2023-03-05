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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCacheFile = exports.checkExistFile = exports.getResizeImagePath = void 0;
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
    const cacheFilePath = path_1.default.join(__dirname, '..', '..', 'src', 'asset', 'cache', `${filename}_${width}_${height}.jpg`);
    const resultFilePath = path_1.default.join(__dirname, '..', '..', 'src', 'asset', 'thumb', filename + '_thumb.jpg');
    return {
        filePath,
        cacheFilePath,
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
/**
 * Copy file from cache folder into thumb folder
 * @param src The source file path
 * @param dest The destination file path
 * @returns The promise: the file path is written to the destination
 */
const useCacheFile = (src, dest) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fs_1.default.copyFile(src, dest, (err) => {
            if (err) {
                reject(err);
            }
            resolve(dest);
        });
    });
});
exports.useCacheFile = useCacheFile;
