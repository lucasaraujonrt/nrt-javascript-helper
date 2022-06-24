import Compress from "compress.js";
import Config from "../config/file";

/**
 * It takes an image file, compresses it, and returns the compressed image as a base64 string.
 * @param {File} images - File - The image file you want to compress
 * @param [highQuality=false] - boolean
 * @returns A base64 string.
 */
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
};

/**
 * It takes a Blob and returns a Promise that resolves to a base64 string.
 * @param {Blob} img - Blob - The image you want to convert to base64
 * @returns A promise that resolves to a base64 string.
 */
export const getBase64 = async (img: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => resolve(reader.result);
  });
};

/**
 * It takes a file, checks if it's a png, if it is, it returns the base64 of the file, if it's not, it
 * compresses the file and returns the base64 of the compressed file
 * @param {any} file - The file object that you want to compress.
 * @returns The file object with the base64 property added to it.
 */
export const compressFileAndGetBase64 = async (file: any) => {
  if (file.type !== "image/png") {
    file.base64 = await compressImages([file], true);
  } else {
    file.base64 = await getBase64(file);
  }
  return file;
};
