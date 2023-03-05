import { resizeImage } from '../../utils/imageUtils';

describe('Image transform function should resolve or reject ', () => {
  it('Expect transform to not throw error', async () => {
    await expectAsync(
      resizeImage('image1', {
        size: { width: 200, height: 200 },
      })
    ).toBeResolved();
  });
  it('Expect transform to throw specific error: Image not found', async () => {
    await expectAsync(
      resizeImage('image99', {
        size: { width: 200, height: 200 },
      })
    ).toBeRejectedWith(new Error('Image not found!'));
  });
  it('Expect transform to throw specific error: Cannot resize image with input size (0, 200)', async () => {
    await expectAsync(
      resizeImage('image1', {
        size: { width: 0, height: 200 },
      })
    ).toBeRejectedWith(new Error('Cannot resize image with input size'));
  });
  it('Expect transform to throw specific error: Cannot resize image with input size (200, 0)', async () => {
    await expectAsync(
      resizeImage('image1', {
        size: { width: 200, height: 0 },
      })
    ).toBeRejectedWith(new Error('Cannot resize image with input size'));
  });
});
