# YueVerse Studio V3.1.0 发布说明

## 升级主题
混合图片稳定架构：核心封面本地化，资讯与影像墙继续在线加载，失败时自动回退到本地封面。

## 修改文件
- `index.html`：平台首页改用本地 WebP 封面。
- `apps/li-yunxiao/index.html`：首页核心图本地化。
- `apps/chen-lijun/index.html`：首页核心图本地化，修复陈丽君首页无图。
- 两个演员的 `app.js`：在线影像失败后自动回退，不再出现空白破图。
- 两个演员的 `styles.css`：增加回退状态提示。
- 两个演员的 `sw.js`：缓存版本升级并预缓存核心封面。
- 两个演员的 `manifest.webmanifest`、根 `package.json`：版本升级。

## 新增文件
- `apps/li-yunxiao/assets/hero-li-yunxiao.webp`（约 57 KB）
- `apps/chen-lijun/assets/hero-chen-lijun.webp`（约 19 KB）

## 删除文件
无。

## 体积变化
仅增加约 77 KB 核心图片，未把 20 张在线影像全部放入程序包。

## 部署
必须全量覆盖源码，但保留克隆仓库中的 `.git`。部署后刷新网站缓存或重新打开主屏幕应用。
