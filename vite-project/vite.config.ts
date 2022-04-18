import { defineConfig, normalizePath } from "vite";
import VueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

import path from "path";
// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式

// 由于 Windows 识别多个路径分隔符，两个分隔符都将被 Windows 首选分隔符 (\) 的实例替换
// 解决 window 下的路径问题
const mixinsCssPath = normalizePath(
  path.resolve(__dirname, "src/styles/mixins.scss")
);

export default defineConfig({
  root: path.resolve(__dirname, "src"), // // 手动指定项目根目录位置
  plugins: [
    vue(),
    VueJsx({}),
  ],
  resolve: {
    alias: {
      // //文件系统路径的别名, 绝对路径
      "@": path.resolve(__dirname, "src")
    },
  },
  // css配置
  css: {
    // 指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键：如scss less styles等
    preprocessorOptions: {
      scss: {
        // additionalData: 以lang="scss"的样式文件会自动引入对应的文件
        additionalData: `@use "${mixinsCssPath}" as *;`,
      },
    },
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: "camelCase",
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名 hash表示哈希值 6 表示6位数的`哈希值
      generateScopedName: "[name]__[local]__[hash:6]",
    },
    // 在开发过程中是否启用 sourcemap。default: false
    devSourcemap: false,
    // postcss配置
    postcss: {
      // autoprefixer 用来自动为不同的目标浏览器添加样式前缀，解决的是浏览器兼容性的问题
      plugins: [
        autoprefixer({
          // env: "development",
          // 制定目标浏览器
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }),
      ],
    },
  },
});
