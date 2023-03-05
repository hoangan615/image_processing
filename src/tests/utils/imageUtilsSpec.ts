import { resizeImage } from '../../utils/imageUtils';

describe('Image transform function should resolve or reject ', () => {
  it('Expect transform to not throw error', async () => {
    await expectAsync(
      resizeImage('image1', {
        size: { width: 200, height: 200 },
      })
    ).toBeResolved();
  });
  it('Expect transform to throw specific error', async () => {
    await expectAsync(
      resizeImage('image99', {
        size: { width: 200, height: 200 },
      })
    ).toBeRejectedWith(new Error('Image not found'));
  });
});
