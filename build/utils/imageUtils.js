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
exports.resizeImage = void 0;
const fileUtils_1 = require("./fileUtils");
const sharp_1 = __importDefault(require("sharp"));
/**
 * Resize image, if image was resized, use image in cache folder
 * @param filename The file name to resize
 * @param options The options to apply to the resize
 * @returns
 */
const resizeImage = (filename, options) => __awaiter(void 0, void 0, void 0, function* () {
    const image = (0, fileUtils_1.getResizeImagePath)(filename, options.size.width, options.size.height);
    // Check source image exists
    if (!(0, fileUtils_1.checkExistFile)(image.filePath)) {
        throw new Error('Image not found');
    }
    // Check cache image exists, if not, resize the image
    if (!(0, fileUtils_1.checkExistFile)(image.cacheFilePath)) {
        try {
            yield (0, sharp_1.default)(image.filePath)
                .resize(options.size.width, options.size.height)
                .jpeg()
                .toFile(image.cacheFilePath);
        }
        catch (err) {
            throw new Error('Cannot resize image');
        }
    }
    // Using cache image & copy to result folder
    try {
        yield (0, fileUtils_1.useCacheFile)(image.cacheFilePath, image.resultFilePath);
    }
    catch (err) {
        throw new Error('Cannot resize image');
    }
    // Return result image path
    return image.resultFilePath;
});
exports.resizeImage = resizeImage;
