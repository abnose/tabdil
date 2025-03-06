import crypto from 'crypto';
import generateHash from '../utils/generateHash';
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const id = getRouterParam(event, 'id');

    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'Character ID is required' });
    }

    const { hash, ts } = generateHash()

    const marvelUrl = `${config.public.marvelApiBase}/characters/${id}?apikey=${config.public.marvelApiKey}&ts=${ts}&hash=${hash}`;

    try {
        const data = await $fetch(marvelUrl);
        return data;
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: 'Failed to fetch character' });
    }
});
