import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://keenawa-co.github.io/moss-studio-docs/",

    integrations: [
        starlight({
            title: "Moss Docs",
            social: {
                github: "https://github.com/keenawa-co/moss-studio-docs",
            },
            defaultLocale: "en",
            locales: {
                en: {
                    label: "English",
                },
                ru: {
                    label: "Русский",
                },
            },
            customCss: ["./src/tailwind.css"],
        }),
        tailwind({
            applyBaseStyles: true,
            configFile: "./tailwind.config.mjs",
        }),
    ],
});
