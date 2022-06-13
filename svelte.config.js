import { mdsvex } from 'mdsvex';
import firebase from 'svelte-adapter-firebase';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	outDir: 'public/',
	kit: {
		adapter: firebase({
			esbuildBuildOptions(defaultOptions) {
				return {
					...defaultOptions,
					target: 'esm'
				};
			},
			firebaseJsonPath: 'firebase.json'
		})
	}
};

export default config;
