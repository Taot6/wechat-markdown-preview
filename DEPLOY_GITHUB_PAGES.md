# 发布到 GitHub Pages

这个文件夹已经可以作为一个独立 GitHub Pages 项目发布。推荐使用 `Deploy from a branch`，因为这是纯静态网页，不需要 GitHub Actions 构建。

## 发布设置

推送代码后，到 GitHub 仓库页面：

1. 打开 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中：
   - `Source` 选择 `Deploy from a branch`
   - `Branch` 选择 `main`
   - 文件夹选择 `/ (root)`
4. 点击 `Save`

等待 1-3 分钟后，发布地址通常是：

```text
https://你的用户名.github.io/wechat-markdown-preview/
```

## 命令行推送

如果还没有推送远程仓库，可以运行：

```powershell
git remote add origin https://github.com/你的用户名/wechat-markdown-preview.git
git push -u origin main
```

## 后续更新

以后修改模板或功能后，重新提交并推送到 `main` 分支，GitHub Pages 会自动重新部署。
