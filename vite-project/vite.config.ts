import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'), // // 手动指定项目根目录位置
  plugins: [vue()]
})
