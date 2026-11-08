# 复现所用提示词记录

> 工具说明：当前执行环境未安装 Trae，本次由 Claude Code 完成代码实现与验收。下面是与实现
> 步骤一一对应的可复跑提示词记录，并非 Trae 会话导出；每条均限定 Vue 3 + Element Plus
> 技术栈，可直接按顺序粘贴到 Trae 中复跑并得到相同结构的项目。

## 提示词 1：搭建项目与路由

```text
你是资深 Vue 前端工程师。请使用 Vue 3 + Vite + Element Plus + Vue Router 从零搭建
一个前端项目，要求：
1. 技术栈限定为 Vue 3（Composition API，使用 <script setup>）、Element Plus、Vue Router、Vite；
2. 不引入其他 UI 组件库、CSS 框架或多余依赖；
3. 使用 history 路由模式，根路径 / 自动重定向到 /assignment3；
4. /assignment3 用于复现学习平台首页，路由名称为 Assignment3；
5. 页面标题设为“在线学习平台首页 - Web前端开发学习平台”；
6. 引入 Element Plus 中文语言包，并全局注册 @element-plus/icons-vue 图标；
7. 所有界面文案使用简体中文。
本次只搭建可运行的项目骨架、全局样式重置和路由，不实现页面内容。
```

## 提示词 2：整体布局与顶部导航

```text
参考目标页面 https://go2free.cn/samples/learning-platform ，使用 Vue 3 + Element Plus
实现学习平台首页。请严格遵循以下视觉与结构要求：

全局：
- 页面最小高度 100vh，背景 #f5f7fa，主体内容最大宽度 1200px，左右内边距 20px；
- 白色内容块圆角 8px、内边距 24px、下间距 24px，浅阴影 0 2px 8px #0000000a；
- 字体系列 "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif。

顶部导航：
- 使用 sticky 定位，高 64px，白底，阴影 0 2px 12px #00000014，水平使用 space-around；
- 左侧为“智学云课堂”品牌区，School 图标 28px、颜色 #409EFF，品牌文字 20px/700/#303133；
- 搜索框宽 480px、Element Plus large 尺寸、可清空，前缀 Search 图标，append 插槽放
  type="primary" 的“搜索”按钮，占位文字“搜索课程、讲师、分类…”；
- 右侧为 Bell 图标（el-badge 显示 6，max 99）和 36px 圆形 el-avatar；
- 头像使用 trigger="hover" 的 el-dropdown，菜单项依次为“个人信息”“已购课程”
  “退出登录”，最后一项加 divided。
```

## 提示词 3：轮播 Banner 与精选课程

```text
继续使用 Vue 3 + Element Plus 实现首页主体：

Banner：
- 使用 el-carousel，高度 340px，trigger="click"，interval=4000，arrow="hover"；
- 三张轮播：前端进阶训练营 2026 / AI Coding 实战季 / 全栈进阶计划；
- 文案分别为“从工程化到性能优化，全面实战”“掌握 LLM 辅助开发，提升 10 倍效率”
  “前端 + Node + 云原生，一站式成长”；
- 渐变背景依次为 #409EFF→#67C23A、#9C27B0→#E91E63、#FF9800→#FF5722；
- 内容居中白色文字，标题 30px，描述 16px、opacity .9，下方 primary round 按钮“立即查看”；
- 每个轮播项铺满高度、圆角 8px。

精选课程：
- 标题区左侧“精选课程”20px/600，右侧说明“跟随行业一线工程师学习”13px/#909399；
- el-tabs 三个页签：全部（all）、前端（frontend）、AI Coding（ai）；
- 课程网格使用 el-row :gutter="20"，每项 el-col :xs="24" :sm="12" :md="8"；
- 六门课程数据：Vue3 组件库设计与实现/前端/李伟/24课时/299、
  React 18 并发渲染原理/前端/王芳/18课时/199、
  AI 辅助编程实战营/AI Coding/张磊/16课时/399、
  TypeScript 类型体操进阶/前端/陈静/20课时/249、
  Prompt 工程与 LLM 应用开发/AI Coding/赵强/14课时/349、
  Vite 构建工具深度剖析/前端/刘洋/12课时/159；
- 每门课程封面使用对应渐变色，高 140px，居中放 40px 白色 Reading 图标；
- 使用 el-card shadow="hover" 且 body padding 为 0，卡片圆角 8px，悬停上移 4px；
- 卡片正文：小型 light 标签显示分类、16px/600 课程标题、“讲师：xx · xx课时”、
  红色价格“¥ 金额”和右侧 primary small round 的“立即学习”按钮。
```

## 提示词 4：学习记录表格

```text
实现“我的学习记录”区块，使用 el-table，开启 stripe 和 border：
- 标题区：“我的学习记录”/“坚持学习，持续进步”，样式与精选课程区块标题一致；
- 列依次为：序号（index，宽 70，居中）、课程名称（min-width 180）、
  当前章节（min-width 160）、学习进度（宽 220，居中）、状态（宽 120，居中）、
  操作（宽 120，居中）；
- 四条记录：
  1. Vue3 组件库设计与实现，第 8 章：表单组件封装，65%，学习中；
  2. React 18 并发渲染原理，第 5 章：Suspense 与并发模式，42%，学习中；
  3. AI 辅助编程实战营，第 11 章：AI 代码评审，100%，已完成；
  4. TypeScript 类型体操进阶，第 2 章：条件类型，18%，学习中；
- 进度列使用 el-progress，stroke-width 20，text-inside；100% 为 #67C23A，
  ≥50% 为 #409EFF，其余为 #E6A23C；
- 状态列使用 plain 效果 el-tag，已完成为 success，学习中为 warning；
- 操作列为 primary link 按钮“继续学习”。
```

## 提示词 5：帮助中心、页脚与意见反馈弹窗

```text
继续补全页面底部和反馈表单：

帮助中心：
- 标题“帮助中心”/“常见问题解答”；
- 使用 el-collapse 并开启 accordion，默认展开第 1 项；
- 三个问题和答案：
  “如何申请课程退款？”——购买课程 7 天内且学习进度不超过 30%，可在「我的订单」页面
  申请全额退款，款项将在 3 个工作日内原路退回。
  “课程证书如何获取？”——完成课程全部章节学习并通过期末测验（≥60 分），系统将自动
  生成电子证书，可在「个人中心-我的证书」下载。
  “课程有效期是多久？”——购买后永久有效，可随时回看复习。配套的直播答疑服务自购买
  之日起 12 个月内有效。
- 答案文字 14px、颜色 #606266、行高 1.8。

页脚：
- 深色背景 #303133，文字颜色 #c0c4cc，内容最大宽度 1200px，左右留白，上下 padding 20px；
- 左侧“© 2026 智学云课堂 · 仅用于教学示范”，右侧 primary 按钮带 ChatDotRound 图标，
  文案“意见反馈”。

反馈弹窗：
- el-dialog 标题“意见反馈”，宽 520px，close-on-click-modal=false；
- el-form 使用 label-width="80px"，字段为姓名、邮箱、反馈类型、详细描述；
- 反馈类型下拉选项：功能建议 feature、Bug 报告 bug、内容纠错 content、其他 other；
- 描述为 textarea，4 行，maxlength=300，显示字数统计；
- 校验规则依次为：请输入姓名、请输入邮箱且校验邮箱格式、请选择反馈类型、请填写详细描述；
- 底部按钮“取消”“提交反馈”；校验通过后提示“反馈已提交，感谢您的建议！”并关闭、重置表单。
```

## 提示词 6：交互文案与行为

```text
补齐所有 Element Plus 交互行为，提示文案需与参考页一致：
1. 搜索：关键词为空时 ElMessage.warning("请输入搜索关键词")；
   非空时 ElMessage.success(`正在搜索：${keyword}`)；输入框中按 Enter 也触发搜索；
2. 课程分类 tabs 切换后按 catKey 实时筛选课程；
3. 点击任意课程卡片的“立即学习”：
   ElMessage.success(`已加入学习：${course.title}`)；
4. 头像下拉菜单命令处理：
   profile → ElMessage.info("个人信息")；
   courses → ElMessage.info("已购课程")；
   logout → ElMessage.info("已退出登录")；
5. 轮播每 4 秒自动切换，点击指示器可切换，悬停时显示左右箭头；
6. 所有按钮和下拉项保持可点击、可聚焦，弹窗打开后可正常关闭，交互不得报错。
```

## 提示词 7：像素级校验与收尾

```text
请以 1440×1200 视口打开 http://localhost:5173/assignment3，对照参考页进行验收：
- 检查导航高 64px，左侧品牌+搜索整体宽约 680px，搜索框 480×40px；
- Banner 高 340px，主体内容最大宽度 1200px；
- 首屏课程为三列，课程卡片间距 20px，表格、FAQ、页脚顺序正确；
- 整页高度应与参考页一致（约 1985px），无水平滚动条；
- 分别测试搜索空/非空、tabs 筛选、立即学习提示、头像下拉、FAQ 手风琴、
  反馈弹窗必填校验和提交成功；
- 修复所有控制台报错（favicon 404 除外），确认 npm run build 成功；
- 保持页面路由为 /assignment3，根路由自动跳转，刷新 /assignment3 不出现 404。
```

## 提示词 8：本地预览与提交

```text
请启动开发服务器并给出复现代码访问地址。最终提交格式为：
1. 先给复现代码网址（http://localhost:5173/assignment3）；
2. 再附上以上全部提示词；
3. 最后说明技术栈、已实现交互和本地启动命令。
```

## 提示词 9：上传 GitHub 并配置 GitHub Pages

```text
请将当前项目上传到 GitHub 仓库 ccy-110/learning-platform-assignment3，并配置 GitHub Pages：
1. 保持 main 分支为源码主分支；
2. 为 GitHub Pages 生产构建设置 Vite base 为 /learning-platform-assignment3/；
3. Vue Router 使用 import.meta.env.BASE_URL 作为 history 基础路径，保持应用内路由为 /assignment3；
4. 头像等 public 资源通过 import.meta.env.BASE_URL 拼接，避免子路径下 404；
5. 构建时复制 index.html 为 404.html，作为 GitHub Pages 的 SPA 刷新回退；
6. 增加 build:pages 与 preview:pages 脚本；
7. 添加 GitHub Actions 工作流，在推送到 main 时自动构建并发布到 gh-pages 分支；
8. 将 GitHub Pages 的 Source 一次性设置为 Deploy from a branch → gh-pages → / (root)；
9. 最终在线地址应为 https://ccy-110.github.io/learning-platform-assignment3/assignment3，
   并验证首页重定向、静态资源、头像和 /assignment3 直接访问均正常。
```
