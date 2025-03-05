import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  console.log('query =', query)
  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + config.marvelPrivateKey + config.public.marvelApiKey)
    .digest("hex");

  const limit = 12;
  const page = Number(query.page) || 1;
  const offset = (page - 1) * limit;
  const searchQuery = query.searchQuery ? `&nameStartsWith=${query.searchQuery}` : "";

  const url = `${config.public.marvelApiBase}/characters?apikey=${config.public.marvelApiKey}&ts=${ts}&hash=${hash}&limit=${limit}&offset=${offset}${searchQuery}`;
  try {
    const data = await $fetch(url);
    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch characters",
    });
  }
});
