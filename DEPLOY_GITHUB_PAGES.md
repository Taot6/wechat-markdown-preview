# 发布到 GitHub Pages

这个文件夹已经可以作为一个独立 GitHub Pages 项目发布。

## 方法一：命令行发布

在 GitHub 新建一个空仓库，例如 `wechat-markdown-preview`。然后在本目录运行：

```powershell
git remote add origin https://github.com/你的用户名/wechat-markdown-preview.git
git push -u origin main
```

推送后，到 GitHub 仓库页面：

1. 打开 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中选择 `GitHub Actions`
4. 等待 `Actions` 里的部署任务完成

发布地址通常是：

```text
https://你的用户名.github.io/wechat-markdown-preview/
```

## 方法二：网页上传

如果不想用命令行，可以在 GitHub 新建仓库后，把本文件夹里的所有文件上传到仓库根目录。注意也要上传隐藏目录 `.github` 和文件 `.nojekyll`。

## 后续更新

以后修改模板或功能后，重新提交并推送到 `main` 分支，GitHub Pages 会自动重新部署。
