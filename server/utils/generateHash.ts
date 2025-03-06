import crypto from 'crypto';

export default function generateHash() {
    const config = useRuntimeConfig();
    const ts = Date.now().toString();
    const hash = crypto.createHash('md5').update(ts + config.marvelPrivateKey + config.public.marvelApiKey).digest('hex');
    return { hash, ts }
}
