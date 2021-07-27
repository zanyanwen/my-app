import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from "path";

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },

  optimizeDeps: {
    include: ["@ant-design/icons-vue"],
  },
  plugins: [vue()],
  // build: {
  //   chunkSizeWarningLimit:1500,
  //   rollupOptions: {
  //       output:{
  //           manualChunks(id) {
  //             if (id.includes('node_modules')) {
  //                 return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //             }
  //         }
  //       }
  //   }
  // }
})