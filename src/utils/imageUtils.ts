import { checkExistFile, getResizeImagePath } from './fileUtils';
import sharp from 'sharp';

/**
 * Image size
 */
interface ImageSize {
  width: number;
  height: number;
}

/**
 * Image resize options
 */
interface ImageResizeOptions {
  size: ImageSize;
}

/**
 * Resize image, if image was resized, use image in cache folder
 * @param filename The file name to resize
 * @param options The options to apply to the resize
 * @returns
 */
export const resizeImage = async (
  filename: string,
  options: ImageResizeOptions
): Promise<string> => {
  const image = getResizeImagePath(
    filename,
    options.size.width,
    options.size.height
  );

  // Check source image exists
  if (!checkExistFile(image.filePath)) {
    throw new Error('Image not found!');
  }

  // Check result image exists, if not, resize the image
  if (!checkExistFile(image.resultFilePath)) {
    try {
      await sharp(image.filePath)
        .resize(options.size.width, options.size.height)
        .jpeg()
        .toFile(image.resultFilePath);
      console.log(
        `${filename} was resized to {${options.size.width}, ${options.size.height}}`
      );
    } catch (err: unknown) {
      console.log('Cannot resize image, error', err);
      throw new Error(`Cannot resize image with input size`);
    }
  }
  console.log(`Result file ${image.resultFilePath}`);

  // Return result image path
  return image.resultFilePath;
};
