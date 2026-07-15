# Markdown 公众号模板预览器

这是一个本地静态网页工具，用于把 Markdown 文章转换成带内联样式的公众号预览 HTML。

## 使用方式

直接打开 `index.html`，或在该目录启动任意静态服务器后访问页面。

核心功能：

- 粘贴或导入 `.md` 文件
- 选择不同公众号文章模板
- 调整字号、强调色、背景色
- 使用 6 组配套色一键修改当前模板颜色，并支持单独调整每个色块
- 手机/宽屏预览
- 复制富文本到公众号编辑器
- 复制 HTML、导出 HTML、导出 Markdown
- 插入可横向滑动的图片组或文字链接组
- 插入可上下滑动的图片组或文字链接组
- 插入文献卡片和高亮重点框
- 生成并下载公众号封面图 PNG

## 增加模板

在 `app.js` 的 `templates` 数组中追加模板对象即可。模板样式会以内联 CSS 方式生成，便于复制到公众号编辑器。

页面内置 6 组配套色，可在“模板全部颜色”中一键应用到当前模板。每组的 6 个色块都可以继续手动修改，修改后会立即作用到预览和导出的 HTML。

## 公众号组件语法

文献卡片：

```markdown
::: paper-card
标题: 这里填写文献标题
期刊: Nature Medicine
日期: 2026-07-15
DOI: 10.0000/example
亮点: 一句话概括这篇文章最值得公众号读者关注的发现。
方法: 单细胞转录组、空间验证、公共队列映射、预后分析。
启发: 可借鉴其“细胞状态定义 - 队列验证 - 临床解释”的分析闭环。
:::
```

高亮重点框：

```markdown
::: highlight
类型: 核心结论
内容: 这里写需要读者优先记住的关键发现、分析思路或选题启发。
:::
```

封面图生成器会根据当前模板强调色生成 900×383 PNG。可手动输入封面标题，或点击“取标题”自动读取文章一级标题。

## 滑动组件语法

滑动图片：

```markdown
::: image-scroll
![图片标题 1](https://example.com/image-1.jpg)
![图片标题 2](https://example.com/image-2.jpg)
:::
```

滑动文字链接：

```markdown
::: link-scroll
[链接标题 1](https://example.com/) - 一句话说明这个链接的价值
[链接标题 2](https://example.com/) - 适合放原文、数据库或工具入口
:::
```

上下滑动图片：

```markdown
::: image-vscroll
![结果图 A](https://example.com/image-a.jpg)
![结果图 B](https://example.com/image-b.jpg)
![结果图 C](https://example.com/image-c.jpg)
:::
```

上下滑动文字链接：

```markdown
::: link-vscroll
[链接标题 A](https://example.com/) - 适合放文献原文、数据库入口或工具链接
[链接标题 B](https://example.com/) - 上下滑动适合较长链接列表
:::
```
