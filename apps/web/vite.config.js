import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@siakablog/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@siakablog/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@siakablog/client': path.resolve(__dirname, '../../packages/client/src'),
    },
  },
});

// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: 'automatic',
//     }),
//   ],
// });
