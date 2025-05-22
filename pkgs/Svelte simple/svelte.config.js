import adapter from '@sveltejs/adapter-static'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    prerender: {
			handleHttpError: ({ _path, _referrer, message }) => {
        console.error({ 'Error Message': message })
      },
		},
  },
}

export default config
