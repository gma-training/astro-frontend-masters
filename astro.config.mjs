import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-frontend-masters-gma.netlify.app',
	integrations: [
		react({
			include: ['**/add-to-cart*'],
		}),
		solidJs({
			include: ['**/cart*'],
		}),
	],
	output: 'hybrid',
	experimental: {
		hybridOutput: true
	}
});
