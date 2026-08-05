# YueVerse Studio V3.0.0｜越界艺境

多演员越剧数字艺术馆统一工程。当前包含李云霄与陈丽君两个独立艺术馆，共享根级 Cloudflare Functions、GitHub Actions、更新脚本与统一品牌组件。

## 访问路径
- 平台首页：`/`
- 李云霄：`/apps/li-yunxiao/`
- 陈丽君：`/apps/chen-lijun/`

## 部署
将本仓库完整推送到 GitHub，并在 Cloudflare Pages 连接该仓库。构建命令留空，输出目录为 `/`。GitHub Actions 权限设置为 Read and write permissions。

## 新增演员
复制 `apps/actor-template`（后续版本提供完整向导），新增 `data/actors/<slug>.json`，并在 `data/actors/index.json` 登记。
