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
  plugins: [vue()]
})