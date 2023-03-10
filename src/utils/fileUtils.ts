import fs from 'fs';
import path from 'path';

interface FileResult {
  filePath: string;
  resultFilePath: string;
}

/**
 * Get the path based on filename
 * @param filename The file name to display
 * @param width The width of the image
 * @param height The height of the image
 * @returns
 */
export const getResizeImagePath = (
  filename: string,
  width: number,
  height: number
): FileResult => {
  const filePath = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'asset',
    'full',
    filename + '.jpg'
  );
  const resultFilePath = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'asset',
    'thumb',
    `${filename}_${width}_${height}.jpg`
  );
  return {
    filePath,
    resultFilePath,
  };
};

/**
 * Check the file exist
 * @param file The file path
 * @returns true if the file exists, false otherwise
 */
export const checkExistFile = (file: string): boolean => {
  if (fs.existsSync(file)) {
    return true;
  }
  return false;
};
