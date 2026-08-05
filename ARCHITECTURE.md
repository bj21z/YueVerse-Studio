# 架构

- `apps/`：演员独立艺术馆及演员专属数据。
- `packages/shared/`：跨演员共享视觉与运行桥接。
- `functions/`：Cloudflare Pages 根级同源接口。
- `scripts/`：全部演员统一维护脚本。
- `data/actors/`：演员注册表、关键词和路径配置。
- `.github/workflows/`：统一自动巡检与提交。

V3.0 首先统一基础设施；后续版本将继续把重复 UI、图库、答题和资讯前端逻辑逐步抽取到 `packages/`，不会破坏现有两个艺术馆的稳定运行。
