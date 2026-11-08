# 智学云课堂 · 学习平台首页复现

参考页面：<https://go2free.cn/samples/learning-platform>

## 技术栈

- Vue 3.5.33（Composition API + `<script setup>`）
- Element Plus 2.13.7
- Vue Router 4.6.4（history 模式）
- Vite 7.3.7

## 本地运行

```bash
npm install
npm run dev
```

访问：<http://localhost:5173/assignment3>

根路径 `/` 会自动重定向到 `/assignment3`。

## 在线预览

GitHub Pages：<https://ccy-110.github.io/learning-platform-assignment3/assignment3>

## 生产构建

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。项目使用 history 路由，部署到静态服务器时需要将未匹配的路径回退到
`index.html`；已提供 Netlify 的 `public/_redirects` 与 Vercel 的 `vercel.json`。

## GitHub Pages 部署

仓库内置了 `.github/workflows/deploy-pages.yml`：推送到 `main` 后自动构建并发布到
`gh-pages` 分支。GitHub Pages 的 Source 需一次性设置为：

```text
Deploy from a branch → gh-pages → / (root)
```

Pages 构建使用 `/learning-platform-assignment3/` 作为 Vite 基础路径，并生成
`404.html` 作为 SPA 路由的刷新回退，因此直接打开 `/assignment3` 不会出现 404。

## 已实现内容

- 顶部导航：Logo、课程搜索、通知角标、头像下拉菜单
- 三屏渐变色轮播 Banner（自动播放、点击指示器切换、悬停显示箭头）
- 精选课程分类筛选（全部 / 前端 / AI Coding）与课程卡片
- 我的学习记录表格、按进度着色的进度条与状态标签
- 帮助中心手风琴问答
- 页脚与带完整校验的意见反馈弹窗
- 所有按钮、搜索、下拉菜单、表单提交的交互反馈文案与参考页一致

## 目录结构

```text
learning-platform/
├─ public/
│  ├─ images/avatar.png
│  ├─ .nojekyll
│  └─ _redirects
├─ .github/workflows/deploy-pages.yml
├─ src/
│  ├─ router/index.js
│  ├─ styles/global.css
│  ├─ views/LearningPlatform.vue
│  ├─ App.vue
│  └─ main.js
├─ index.html
├─ package.json
├─ vercel.json
└─ vite.config.js
```
