import crypto from 'crypto';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const id = getRouterParam(event, 'id');
    const type = getRouterParam(event, 'type');

    if (!id || !type) {
        throw createError({ statusCode: 400, statusMessage: 'Character ID and type are required' });
    }

    if (!['comics', 'stories'].includes(type)) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid type, use "comics" or "stories"' });
    }

    const ts = Date.now().toString();
    const hash = crypto
        .createHash('md5')
        .update(ts + config.marvelPrivateKey + config.public.marvelApiKey)
        .digest('hex');

    const marvelUrl = `${config.public.marvelApiBase}/characters/${id}/${type}?limit=6&apikey=${config.public.marvelApiKey}&ts=${ts}&hash=${hash}`;

    try {
        const data = await $fetch(marvelUrl);
        return data;
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: `Failed to fetch ${type}` });
    }
});
