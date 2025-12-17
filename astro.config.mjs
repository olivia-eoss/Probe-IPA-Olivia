// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'metasfresh Dokumentation',
      		tableOfContents: false,
			customCss: ['./src/styles/custom.css'],
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true, // Hide the site title
			},

			locales: {
				root: {
				label: 'Deutsch',
				lang: 'de',
				}
			},

			sidebar: [
				{
				label: 'Einstieg',
				collapsed: true,
				autogenerate: { directory: 'Einstieg' },
				},
				{
				label: 'Stammdaten Verwalten',
				collapsed: true,
				autogenerate: { directory: 'Stammdaten' },
				},
				{
				label: 'Geschäftsprozesse',
				collapsed: true,
				autogenerate: { directory: 'Geschaftsprozesse' },
				},
				{
				label: 'Erweiterte Funktionen',
				collapsed: true,
				autogenerate: { directory: 'ErweiterteFunktionen' },
				},
			],
		}),
	],
});
