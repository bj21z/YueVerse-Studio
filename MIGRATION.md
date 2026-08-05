# 从独立仓库迁移到统一工程

1. 在 Code App 新建空文件夹 `YueVerse-Studio`，不要克隆到已有非空目录。
2. 将本压缩包内所有内容复制到该文件夹。
3. 新建一个新的 GitHub 仓库，建议名 `YueVerse-Studio`。
4. 在 Code App 初始化 Git，提交并推送。
5. Cloudflare Pages 改为连接新仓库。
6. 构建命令留空，输出目录为 `/`。
7. GitHub Actions 开启 Read and write permissions。
8. 验证根首页及两个演员路径。

原李云霄、陈丽君独立仓库先不要删除，至少保留一个版本周期用于回滚。
