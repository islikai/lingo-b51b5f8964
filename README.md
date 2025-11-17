# Circle Page

这是一个简单的 React 应用，在页面中央显示一个渐变色圆形。

## 项目结构

```
.
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖和脚本配置
├── vite.config.ts          # Vite 构建工具配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.node.json      # Node.js 环境下的 TypeScript 配置
├── src/
│   ├── main.tsx            # 应用入口点
│   ├── index.css           # 全局样式文件
│   ├── App.tsx             # 主应用组件
│   └── components/
│       └── Circle/
│           ├── index.tsx   # 圆形组件
│           └── index.css   # 圆形组件样式
```

## 功能特点

- 页面中心显示一个 200x200 像素的圆形
- 使用渐变背景色（紫色到蓝色）
- 添加了柔和的阴影效果
- 鼠标悬停时有缩放动画效果
- 响应式设计，适应不同屏幕尺寸
- 使用 Tailwind CSS 进行布局

## 运行项目

1. 安装依赖：
   ```
   pnpm install
   ```

2. 启动开发服务器：
   ```
   pnpm run dev
   ```

3. 在浏览器中打开 http://localhost:5173 查看应用