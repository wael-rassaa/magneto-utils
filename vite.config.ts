import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'magneto-utils',
      fileName: (format) => `magneto-utils.${format}.js`,
    },
  },
  resolve: { alias: { src: resolve('src/') } },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
