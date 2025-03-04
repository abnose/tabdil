import md5 from "md5";

export const generateHash = (ts, privateKey, publicKey) => {
  return md5(ts + privateKey + publicKey);
};
