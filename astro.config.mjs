// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://probe-ipa-olivia-8f1ruxu78-olivias-projects-5389bd99.vercel.app/",
	integrations: [
		starlight({
			title: 'metasfresh Dokumentation',
      		tableOfContents: false,
			customCss: ['./src/styles/custom.css'],
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true, // Hide the site title
			},
			
			components: {
				Header: './src/components/CustomHeader.astro',
				Footer: "./src/components/CustomFooter.astro",
				  Hero: "./src/components/CustomHero.astro",
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


