import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://maquininhax.rvt.bio',output:'static',build:{inlineStylesheets:'always'},vite:{server:{allowedHosts:['terminal.local']}},trailingSlash:'always',integrations:[sitemap()]});
