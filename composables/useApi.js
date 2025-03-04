import { generateHash } from "@/utils/generateHash";

export const useMarvelApi = (endpoint, options = {}) => {
  const config = useRuntimeConfig();
  const ts = Date.now().toString();

  const hash = generateHash(
    ts,
    "af7bae9a159113d7643fda340cb3549a33280859",
    config.public.marvelApiKey
  );

  return useFetch(`${config.public.marvelApiBase}/${endpoint}`, {
    ...options,
    query: {
      apikey: config.public.marvelApiKey,
      ts,
      hash,
      ...options.query,
    },
    headers: {
      Accept: "*/*",
      ...options.headers,
    },
  });
};
