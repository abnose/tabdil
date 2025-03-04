// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/style.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  runtimeConfig: {
    public: {
      marvelApiBase: "http://gateway.marvel.com/v1/public",
      marvelApiKey: "ac03c225bd15490d6e2b599c0a235e4b",
    },
    marvelPrivateKey: "af7bae9a159113d7643fda340cb3549a33280859",
  },
});
