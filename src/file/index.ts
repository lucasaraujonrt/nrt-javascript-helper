import Compress from 'compress.js';
import Config from '../config/file';

export const compressImages = async (images: File, highQuality = false) => {
  let response = null;
  try {
    const compress = new Compress();

    const compressOptions = highQuality
      ? {
        quality: Config.highImageCompression.quality,
        maxWidth: Config.highImageCompression.maxWidth,
        size: 4,
        resize: true,
      }
      : {
        quality: Config.imageCompression.quality,
        maxWidth: Config.imageCompression.maxWidth,
        size: 1,
        resize: true,
      };

    response = await compress.compress(images, compressOptions);
    response = response ? `${response[0].prefix}${response[0].data}` : null;
  } catch (e) {
    response = e;
  }
  return response;
}

export const getBase64 = async (img: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => resolve(reader.result);
  });
}

export const compressFileAndGetBase64 = async (file: any)  => {
  if (file.type !== 'image/png') {
    file.base64 = await compressImages([file], true);
  } else {
    file.base64 = await getBase64(file);
  }
  return file;
}