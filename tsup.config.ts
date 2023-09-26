import { Options, defineConfig } from 'tsup'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

export default defineConfig(options => ({
  clean: false,
  dts: false,
  entry: ['src/styles/index.ts'],
  format: 'cjs',
  outDir: 'public/vanilla-styles',
  sourcemap: true,
  splitting: false,
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: options.watch ? 'debug' : 'short',
    }),
  ] as Options['esbuildPlugins'],
}))
