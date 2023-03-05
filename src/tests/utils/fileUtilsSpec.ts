import { checkExistFile, getResizeImagePath } from '../../utils/fileUtils';
import path from 'path';

const filePath = (filename: string) =>
  path.join(
    __dirname,
    '..',
    '..',
    '..',
    'src',
    'asset',
    'full',
    filename + '.jpg'
  );

describe('FileUtils Test', () => {
  it('getResizeImagePath: Get system file name', () => {
    const fileName = 'image1';
    const width = 200;
    const height = 200;
    const result = getResizeImagePath(fileName, 200, 200);
    expect(result.filePath).toContain(`src/asset/full/${fileName}.jpg`);
    expect(result.resultFilePath).toContain(
      `src/asset/thumb/${fileName}_${width}_${height}.jpg`
    );
  });

  it('checkExistFile: exist file image1', () => {
    const file = filePath('image1');

    const isExist = checkExistFile(file);
    expect(isExist).toBe(true);
  });

  it('checkExistFile: not exist file image99', () => {
    const file = filePath('image99');
    const isExist = checkExistFile(file);
    expect(isExist).toBe(false);
  });
});
