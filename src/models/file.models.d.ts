export as namespace fileModels;

export type FileCompress = {
  imageCompression: {
    maxWidth: number;
    quality: number;
  };
  highImageCompression: {
    maxWidth: number;
    quality: number;
  };
}