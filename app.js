"use strict";

const sampleMarkdown = `# 今日高分生信文献精选

> 面向生信、转化医学与课题设计读者的快速精读。今天重点关注单细胞图谱、多组学整合和机器学习模型。

## 今日速览

| 方向 | 期刊 | 值得关注的点 |
| --- | --- | --- |
| 单细胞图谱 | Nature Medicine | 队列规模大，细胞注释与临床结局结合紧密 |
| 多组学整合 | Genome Biology | 转录组、表观组和蛋白组互相验证 |
| AI 预后模型 | Briefings in Bioinformatics | 建模流程完整，外部队列验证充分 |

## 1. 单细胞揭示肿瘤免疫微环境新分层

**一句话亮点：** 研究利用单细胞转录组和空间验证，提出了一个可解释的免疫微环境分型框架。

### 数据与方法

- 纳入多个公开队列与自建单细胞数据集
- 使用细胞通讯、拟时序、转录因子活性和空间共定位分析
- 在 bulk RNA-seq 队列中构建可迁移的 signature

### 对课题设计的启发

这类文章的优势不只在于数据量，更在于把细胞状态、空间位置和患者结局串成一条逻辑线。写公众号时可以突出“从机制线索到临床分层”的闭环。

## 可复用的分析思路

1. 先用单细胞定义核心细胞状态
2. 再把 signature 映射回大样本 bulk 队列
3. 最后用空间组学或免疫组化补足组织学证据

## 可滑动图片组

::: image-scroll
![单细胞聚类图](https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80)
![空间组学切片](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80)
![分析流程示意](https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80)
:::

## 可滑动文字链接

::: link-scroll
[PubMed 检索入口](https://pubmed.ncbi.nlm.nih.gov/) - 适合核验标题、DOI 与发表日期
[Nature Medicine](https://www.nature.com/nm/) - 临床转化类高影响研究
[Genome Biology](https://genomebiology.biomedcentral.com/) - 多组学与方法学文章
[Briefings in Bioinformatics](https://academic.oup.com/bib) - 生信综述、工具与模型研究
:::

## 可上下滑动图片组

::: image-vscroll
![结果图 A](https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80)
![结果图 B](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80)
![结果图 C](https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80)
:::

## 可上下滑动文字链接

::: link-vscroll
[GEO 数据库](https://www.ncbi.nlm.nih.gov/geo/) - 适合查找表达谱和单细胞公开数据
[TCGA 项目](https://portal.gdc.cancer.gov/) - 肿瘤多组学分析常用入口
[UCSC Xena](https://xenabrowser.net/) - 适合跨队列下载和可视化
[Human Cell Atlas](https://www.humancellatlas.org/) - 单细胞图谱资源入口
:::

## 原文链接

[PubMed 检索入口](https://pubmed.ncbi.nlm.nih.gov/)
`;

const templates = [
  {
    id: "clean-lab",
    name: "科研简洁",
    desc: "清爽、留白充分，适合每日文献精读",
    accent: "#1b6fd8",
    paper: "#ffffff",
    page: "padding: 26px 22px; color: #253040; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;",
    h1: "font-size: 24px; line-height: 1.35; margin: 0 0 20px; color: #10233f; font-weight: 800;",
    h2: "font-size: 18px; line-height: 1.45; margin: 30px 0 14px; padding-left: 12px; border-left: 4px solid {{accent}}; color: #10233f; font-weight: 750;",
    h3: "font-size: 16px; line-height: 1.5; margin: 22px 0 10px; color: {{accent}}; font-weight: 700;",
    p: "font-size: {{fontSize}}px; line-height: 1.9; margin: 12px 0; color: #374151;",
    strong: "color: #172033; font-weight: 750;",
    blockquote: "margin: 16px 0; padding: 12px 14px; border-left: 4px solid {{accent}}; background: #f2f7fd; color: #405066; font-size: {{fontSize}}px; line-height: 1.8;",
    tableWrap: "margin: 16px 0; overflow-x: auto;",
    table: "width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;",
    th: "padding: 9px 8px; border: 1px solid #dbe4ef; background: #eef5fd; color: #10233f; font-weight: 700;",
    td: "padding: 9px 8px; border: 1px solid #dbe4ef; color: #374151;",
    ul: "padding-left: 22px; margin: 12px 0; color: #374151; font-size: {{fontSize}}px; line-height: 1.9;",
    ol: "padding-left: 22px; margin: 12px 0; color: #374151; font-size: {{fontSize}}px; line-height: 1.9;",
    li: "margin: 6px 0;",
    link: "color: {{accent}}; text-decoration: none; border-bottom: 1px solid {{accent}};",
    code: "padding: 2px 5px; border-radius: 4px; background: #edf2f7; color: #b42318; font-family: Consolas, monospace; font-size: 0.9em;",
    hr: "border: 0; border-top: 1px solid #dbe4ef; margin: 24px 0;"
  },
  {
    id: "journal-focus",
    name: "高影响期刊",
    desc: "标题感更强，适合 Nature/Cell/Science 系列解读",
    accent: "#b42318",
    paper: "#fffdf8",
    page: "padding: 28px 22px; color: #2d2b28; background: {{paper}}; font-family: Georgia, 'Times New Roman', 'Microsoft YaHei', serif;",
    h1: "font-size: 25px; line-height: 1.35; margin: 0 0 18px; color: #2b1f1c; font-weight: 800;",
    h2: "font-size: 18px; line-height: 1.45; margin: 32px 0 14px; padding: 8px 0; border-top: 2px solid {{accent}}; border-bottom: 1px solid #ead8cf; color: #2b1f1c; font-weight: 760;",
    h3: "font-size: 16px; line-height: 1.5; margin: 22px 0 10px; color: {{accent}}; font-weight: 740;",
    p: "font-size: {{fontSize}}px; line-height: 1.95; margin: 12px 0; color: #463f3a;",
    strong: "color: {{accent}}; font-weight: 760;",
    blockquote: "margin: 16px 0; padding: 13px 15px; border-left: 0; background: #f7ebe5; color: #4b403a; font-size: {{fontSize}}px; line-height: 1.85;",
    tableWrap: "margin: 16px 0; overflow-x: auto;",
    table: "width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.65;",
    th: "padding: 9px 8px; border-bottom: 2px solid {{accent}}; background: #f7ebe5; color: #2b1f1c; font-weight: 750;",
    td: "padding: 9px 8px; border-bottom: 1px solid #ead8cf; color: #463f3a;",
    ul: "padding-left: 22px; margin: 12px 0; color: #463f3a; font-size: {{fontSize}}px; line-height: 1.9;",
    ol: "padding-left: 22px; margin: 12px 0; color: #463f3a; font-size: {{fontSize}}px; line-height: 1.9;",
    li: "margin: 6px 0;",
    link: "color: {{accent}}; text-decoration: none; border-bottom: 1px solid {{accent}};",
    code: "padding: 2px 5px; border-radius: 4px; background: #f3e2db; color: #8f1d14; font-family: Consolas, monospace; font-size: 0.9em;",
    hr: "border: 0; border-top: 1px solid #ead8cf; margin: 24px 0;"
  },
  {
    id: "clinical-green",
    name: "临床转化",
    desc: "稳重、医学感，适合队列研究和临床意义解读",
    accent: "#14745f",
    paper: "#ffffff",
    page: "padding: 26px 22px; color: #22332f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;",
    h1: "font-size: 24px; line-height: 1.35; margin: 0 0 20px; color: #0f2f2a; font-weight: 800;",
    h2: "font-size: 18px; line-height: 1.45; margin: 30px 0 14px; padding: 9px 12px; background: #eaf5f1; color: #0f2f2a; border-radius: 6px; font-weight: 760;",
    h3: "font-size: 16px; line-height: 1.5; margin: 22px 0 10px; color: {{accent}}; font-weight: 720;",
    p: "font-size: {{fontSize}}px; line-height: 1.9; margin: 12px 0; color: #34443f;",
    strong: "color: #0f2f2a; font-weight: 760; background: linear-gradient(transparent 64%, #d7eee7 0);",
    blockquote: "margin: 16px 0; padding: 12px 14px; border-left: 4px solid {{accent}}; background: #f0f8f5; color: #3b514b; font-size: {{fontSize}}px; line-height: 1.85;",
    tableWrap: "margin: 16px 0; overflow-x: auto;",
    table: "width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.65;",
    th: "padding: 9px 8px; border: 1px solid #cfe2dc; background: #eaf5f1; color: #0f2f2a; font-weight: 740;",
    td: "padding: 9px 8px; border: 1px solid #cfe2dc; color: #34443f;",
    ul: "padding-left: 22px; margin: 12px 0; color: #34443f; font-size: {{fontSize}}px; line-height: 1.9;",
    ol: "padding-left: 22px; margin: 12px 0; color: #34443f; font-size: {{fontSize}}px; line-height: 1.9;",
    li: "margin: 6px 0;",
    link: "color: {{accent}}; text-decoration: none; border-bottom: 1px solid {{accent}};",
    code: "padding: 2px 5px; border-radius: 4px; background: #e5f2ee; color: #0c6653; font-family: Consolas, monospace; font-size: 0.9em;",
    hr: "border: 0; border-top: 1px solid #cfe2dc; margin: 24px 0;"
  },
  {
    id: "single-cell",
    name: "单细胞专题",
    desc: "图谱感、层次鲜明，适合 scRNA/spatial 文章",
    accent: "#7c3aed",
    paper: "#ffffff",
    page: "padding: 26px 22px; color: #292634; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;",
    h1: "font-size: 24px; line-height: 1.35; margin: 0 0 20px; color: #211a38; font-weight: 820;",
    h2: "font-size: 18px; line-height: 1.45; margin: 30px 0 14px; padding: 10px 12px; border-left: 4px solid {{accent}}; background: #f4f0ff; color: #211a38; font-weight: 760;",
    h3: "font-size: 16px; line-height: 1.5; margin: 22px 0 10px; color: {{accent}}; font-weight: 720;",
    p: "font-size: {{fontSize}}px; line-height: 1.9; margin: 12px 0; color: #403a4f;",
    strong: "color: #211a38; font-weight: 760;",
    blockquote: "margin: 16px 0; padding: 12px 14px; border: 1px solid #ddd3ff; border-left: 4px solid {{accent}}; background: #fbf9ff; color: #4a425d; font-size: {{fontSize}}px; line-height: 1.85;",
    tableWrap: "margin: 16px 0; overflow-x: auto;",
    table: "width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.65;",
    th: "padding: 9px 8px; border: 1px solid #ddd3ff; background: #f4f0ff; color: #211a38; font-weight: 740;",
    td: "padding: 9px 8px; border: 1px solid #ddd3ff; color: #403a4f;",
    ul: "padding-left: 22px; margin: 12px 0; color: #403a4f; font-size: {{fontSize}}px; line-height: 1.9;",
    ol: "padding-left: 22px; margin: 12px 0; color: #403a4f; font-size: {{fontSize}}px; line-height: 1.9;",
    li: "margin: 6px 0;",
    link: "color: {{accent}}; text-decoration: none; border-bottom: 1px solid {{accent}};",
    code: "padding: 2px 5px; border-radius: 4px; background: #eee8ff; color: #6d28d9; font-family: Consolas, monospace; font-size: 0.9em;",
    hr: "border: 0; border-top: 1px solid #ddd3ff; margin: 24px 0;"
  },
  {
    id: "methods-tool",
    name: "方法工具",
    desc: "偏技术文档风，适合算法、数据库和软件工具",
    accent: "#0f766e",
    paper: "#fbfdff",
    page: "padding: 26px 22px; color: #1f2933; background: {{paper}}; font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;",
    h1: "font-size: 23px; line-height: 1.35; margin: 0 0 20px; color: #17212b; font-weight: 800;",
    h2: "font-size: 18px; line-height: 1.45; margin: 30px 0 14px; padding-bottom: 7px; border-bottom: 2px solid {{accent}}; color: #17212b; font-weight: 760;",
    h3: "font-size: 16px; line-height: 1.5; margin: 22px 0 10px; color: {{accent}}; font-weight: 720;",
    p: "font-size: {{fontSize}}px; line-height: 1.86; margin: 12px 0; color: #354454;",
    strong: "color: #17212b; font-weight: 760;",
    blockquote: "margin: 16px 0; padding: 12px 14px; border-left: 4px solid {{accent}}; background: #eef8f7; color: #334c49; font-size: {{fontSize}}px; line-height: 1.82;",
    tableWrap: "margin: 16px 0; overflow-x: auto;",
    table: "width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;",
    th: "padding: 9px 8px; border: 1px solid #c9ddda; background: #eef8f7; color: #17212b; font-weight: 740;",
    td: "padding: 9px 8px; border: 1px solid #c9ddda; color: #354454;",
    ul: "padding-left: 22px; margin: 12px 0; color: #354454; font-size: {{fontSize}}px; line-height: 1.86;",
    ol: "padding-left: 22px; margin: 12px 0; color: #354454; font-size: {{fontSize}}px; line-height: 1.86;",
    li: "margin: 6px 0;",
    link: "color: {{accent}}; text-decoration: none; border-bottom: 1px solid {{accent}};",
    code: "padding: 2px 5px; border-radius: 4px; background: #e8eef3; color: #0f766e; font-family: Consolas, monospace; font-size: 0.9em;",
    hr: "border: 0; border-top: 1px solid #c9ddda; margin: 24px 0;"
  }
];

const els = {
  input: document.getElementById("markdownInput"),
  templateSelect: document.getElementById("templateSelect"),
  templateList: document.getElementById("templateList"),
  preview: document.getElementById("preview"),
  htmlOutput: document.getElementById("htmlOutput"),
  fontSize: document.getElementById("fontSize"),
  accentColor: document.getElementById("accentColor"),
  paperColor: document.getElementById("paperColor"),
  colorEditor: document.getElementById("colorEditor"),
  previewWidth: document.getElementById("previewWidth"),
  stats: document.getElementById("stats"),
  status: document.getElementById("statusText"),
  templateName: document.getElementById("templateName"),
  fileInput: document.getElementById("fileInput")
};

const componentColors = ["#dbe4ef", "#5f6b7a", "#fbfcfe", "#e5eaf0", "#ffffff"];
const colorOverrides = {};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeColor(color) {
  if (!color) return "";
  let value = color.trim().toLowerCase();
  if (/^#[0-9a-f]{3}$/.test(value)) {
    value = `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
  }
  return value;
}

function getTemplateOverrides(template) {
  if (!colorOverrides[template.id]) colorOverrides[template.id] = {};
  return colorOverrides[template.id];
}

function getColor(template, originalColor) {
  const normalized = normalizeColor(originalColor);
  return getTemplateOverrides(template)[normalized] || normalized;
}

function applyColorOverrides(value, template) {
  return value.replace(/#[0-9a-fA-F]{3,8}\b/g, (color) => getColor(template, color));
}

function applyVars(style, template) {
  const resolved = style
    .replaceAll("{{accent}}", template.accent)
    .replaceAll("{{paper}}", template.paper)
    .replaceAll("{{fontSize}}", els.fontSize.value || "16");
  return applyColorOverrides(resolved, template);
}

function collectTemplateColors(template) {
  const colors = new Set([template.accent, template.paper, ...componentColors].map(normalizeColor));
  Object.values(template).forEach((value) => {
    if (typeof value !== "string") return;
    const resolved = value.replaceAll("{{accent}}", template.accent).replaceAll("{{paper}}", template.paper);
    (resolved.match(/#[0-9a-fA-F]{3,8}\b/g) || []).forEach((color) => colors.add(normalizeColor(color)));
  });
  return [...colors].filter(Boolean);
}

function renderColorEditor(template) {
  const colors = collectTemplateColors(template);
  const inputs = colors
    .map((color, index) => {
      const value = getColor(template, color);
      const label = color === normalizeColor(template.accent) ? "强调色" : color === normalizeColor(template.paper) ? "背景色" : `颜色 ${index + 1}`;
      return `<label class="color-item" title="${label}: ${color}">
        <input type="color" value="${value}" data-color-original="${color}" aria-label="${label}" />
        <span>${label}<br />${color}</span>
      </label>`;
    })
    .join("");
  els.colorEditor.innerHTML = `<div class="color-editor-head"><strong>模板全部颜色</strong><button type="button" id="resetColors">重置</button></div><div class="color-grid">${inputs}</div>`;
  els.accentColor.value = getColor(template, template.accent);
  els.paperColor.value = getColor(template, template.paper);
}

function inlineMarkdown(text, template) {
  let html = escapeHtml(text);
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" style="max-width: 100%; display: block; margin: 14px auto; border-radius: 6px;" />');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" style="${applyVars(template.link, template)}">$1</a>`);
  html = html.replace(/`([^`]+)`/g, `<code style="${applyVars(template.code, template)}">$1</code>`);
  html = html.replace(/\*\*([^*]+)\*\*/g, `<strong style="${applyVars(template.strong, template)}">$1</strong>`);
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return html;
}

function isTableDivider(line) {
  return /^\s*\|?[\s:.-]+\|[\s|:.-]+\s*$/.test(line);
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function renderTable(lines, template) {
  const header = splitTableRow(lines[0]);
  const body = lines.slice(2).map(splitTableRow);
  const th = header.map((cell) => `<th style="${applyVars(template.th, template)}">${inlineMarkdown(cell, template)}</th>`).join("");
  const rows = body
    .map((row) => `<tr>${row.map((cell) => `<td style="${applyVars(template.td, template)}">${inlineMarkdown(cell, template)}</td>`).join("")}</tr>`)
    .join("");
  return `<section style="${applyVars(template.tableWrap, template)}"><table style="${applyVars(template.table, template)}"><thead><tr>${th}</tr></thead><tbody>${rows}</tbody></table></section>`;
}

function renderImageScroll(lines, template) {
  const items = lines
    .map((line) => line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)(?:\s*[-—]\s*(.+))?$/))
    .filter(Boolean)
    .map((match) => {
      const alt = match[1] || "图片";
      const src = escapeHtml(match[2]);
      const caption = match[3] || alt;
      return `<a href="${src}" style="display: inline-block; width: 246px; margin: 0 12px 0 0; vertical-align: top; color: inherit; text-decoration: none; white-space: normal;"><img src="${src}" alt="${escapeHtml(alt)}" style="display: block; width: 246px; height: 154px; object-fit: cover; border-radius: 6px; border: 1px solid #dbe4ef;" /><span style="display: block; margin-top: 8px; color: #5f6b7a; font-size: 13px; line-height: 1.55;">${inlineMarkdown(caption, template)}</span></a>`;
    });
  if (!items.length) return "";
  return `<section style="margin: 16px 0; padding: 4px 0 10px; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">${items.join("")}</section>`;
}

function renderLinkScroll(lines, template) {
  const items = lines
    .map((line) => line.trim().replace(/^[-*+]\s+/, "").match(/^\[([^\]]+)\]\(([^)]+)\)(?:\s*[-—]\s*(.+))?$/))
    .filter(Boolean)
    .map((match) => {
      const title = match[1];
      const href = escapeHtml(match[2]);
      const desc = match[3] || href;
      return `<a href="${href}" style="display: inline-block; width: 224px; min-height: 96px; margin: 0 10px 0 0; padding: 12px; vertical-align: top; white-space: normal; text-decoration: none; border: 1px solid #dbe4ef; border-left: 4px solid ${template.accent}; border-radius: 6px; background: #fbfcfe;"><strong style="display: block; margin-bottom: 7px; color: ${template.accent}; font-size: 15px; line-height: 1.45;">${inlineMarkdown(title, template)}</strong><span style="display: block; color: #5f6b7a; font-size: 13px; line-height: 1.6;">${inlineMarkdown(desc, template)}</span></a>`;
    });
  if (!items.length) return "";
  return `<section style="margin: 16px 0; padding: 4px 0 10px; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">${items.join("")}</section>`;
}

function renderImageVScroll(lines, template) {
  const items = lines
    .map((line) => line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)(?:\s*[-—]\s*(.+))?$/))
    .filter(Boolean)
    .map((match) => {
      const alt = match[1] || "图片";
      const src = escapeHtml(match[2]);
      const caption = match[3] || alt;
      return `<section style="display: block; margin: 0 0 14px; padding-bottom: 14px; border-bottom: 1px solid #e5eaf0;"><img src="${src}" alt="${escapeHtml(alt)}" style="display: block; width: 100%; height: auto; max-height: 280px; object-fit: cover; border-radius: 6px; border: 1px solid #dbe4ef;" /><span style="display: block; margin-top: 8px; color: #5f6b7a; font-size: 13px; line-height: 1.55;">${inlineMarkdown(caption, template)}</span></section>`;
    });
  if (!items.length) return "";
  return `<section style="margin: 16px 0; max-height: 390px; padding: 12px 12px 0; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 1px solid #dbe4ef; border-radius: 6px; background: #fbfcfe;">${items.join("")}</section>`;
}

function renderLinkVScroll(lines, template) {
  const items = lines
    .map((line) => line.trim().replace(/^[-*+]\s+/, "").match(/^\[([^\]]+)\]\(([^)]+)\)(?:\s*[-—]\s*(.+))?$/))
    .filter(Boolean)
    .map((match) => {
      const title = match[1];
      const href = escapeHtml(match[2]);
      const desc = match[3] || href;
      return `<a href="${href}" style="display: block; margin: 0 0 10px; padding: 12px; text-decoration: none; border: 1px solid #dbe4ef; border-left: 4px solid ${template.accent}; border-radius: 6px; background: #ffffff;"><strong style="display: block; margin-bottom: 6px; color: ${template.accent}; font-size: 15px; line-height: 1.45;">${inlineMarkdown(title, template)}</strong><span style="display: block; color: #5f6b7a; font-size: 13px; line-height: 1.6;">${inlineMarkdown(desc, template)}</span></a>`;
    });
  if (!items.length) return "";
  return `<section style="margin: 16px 0; max-height: 340px; padding: 12px 12px 2px; overflow-y: auto; -webkit-overflow-scrolling: touch; border: 1px solid #dbe4ef; border-radius: 6px; background: #fbfcfe;">${items.join("")}</section>`;
}

function renderCustomBlock(kind, lines, template) {
  if (kind === "image-scroll") return renderImageScroll(lines, template);
  if (kind === "link-scroll") return renderLinkScroll(lines, template);
  if (kind === "image-vscroll") return renderImageVScroll(lines, template);
  if (kind === "link-vscroll") return renderLinkVScroll(lines, template);
  return "";
}

function flushParagraph(buffer, html, template) {
  if (buffer.length) {
    html.push(`<p style="${applyVars(template.p, template)}">${inlineMarkdown(buffer.join(" "), template)}</p>`);
    buffer.length = 0;
  }
}

function parseMarkdown(markdown, template) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const paragraph = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph(paragraph, html, template);
      i += 1;
      continue;
    }

    const customBlock = trimmed.match(/^:::\s*(image-scroll|link-scroll|image-vscroll|link-vscroll)\s*$/);
    if (customBlock) {
      flushParagraph(paragraph, html, template);
      const blockLines = [];
      i += 1;
      while (i < lines.length && lines[i].trim() !== ":::") {
        blockLines.push(lines[i]);
        i += 1;
      }
      if (i < lines.length && lines[i].trim() === ":::") i += 1;
      const blockHtml = renderCustomBlock(customBlock[1], blockLines, template);
      if (blockHtml) html.push(blockHtml);
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      flushParagraph(paragraph, html, template);
      html.push(`<hr style="${applyVars(template.hr, template)}" />`);
      i += 1;
      continue;
    }

    if (trimmed.startsWith("|") && lines[i + 1] && isTableDivider(lines[i + 1])) {
      flushParagraph(paragraph, html, template);
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (lines[i] && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      html.push(renderTable(tableLines, template));
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph(paragraph, html, template);
      const level = heading[1].length;
      const styleKey = level === 1 ? "h1" : level === 2 ? "h2" : "h3";
      html.push(`<h${level} style="${applyVars(template[styleKey], template)}">${inlineMarkdown(heading[2], template)}</h${level}>`);
      i += 1;
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph(paragraph, html, template);
      const quote = [];
      while (lines[i] && lines[i].trim().startsWith(">")) {
        quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      html.push(`<blockquote style="${applyVars(template.blockquote, template)}">${quote.map((item) => inlineMarkdown(item, template)).join("<br />")}</blockquote>`);
      continue;
    }

    const listMatch = trimmed.match(/^([-*+]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      flushParagraph(paragraph, html, template);
      const ordered = /^\d+\./.test(listMatch[1]);
      const tag = ordered ? "ol" : "ul";
      const items = [];
      while (lines[i]) {
        const item = lines[i].trim().match(/^([-*+]|\d+\.)\s+(.+)$/);
        if (!item || (/^\d+\./.test(item[1]) !== ordered)) break;
        items.push(`<li style="${applyVars(template.li, template)}">${inlineMarkdown(item[2], template)}</li>`);
        i += 1;
      }
      html.push(`<${tag} style="${applyVars(template[tag], template)}">${items.join("")}</${tag}>`);
      continue;
    }

    paragraph.push(trimmed);
    i += 1;
  }

  flushParagraph(paragraph, html, template);
  return applyColorOverrides(`<section style="${applyVars(template.page, template)}">${html.join("\n")}</section>`, template);
}

function getTemplate() {
  return templates.find((template) => template.id === els.templateSelect.value) || templates[0];
}

function renderTemplates() {
  els.templateSelect.innerHTML = templates.map((template) => `<option value="${template.id}">${template.name}</option>`).join("");
  els.templateList.innerHTML = templates
    .map((template) => `<button type="button" class="template-card" data-template="${template.id}"><div><b>${template.name}</b><span>${template.desc}</span></div></button>`)
    .join("");
}

function countStats(markdown) {
  const clean = markdown.replace(/[#>*_`|[\]()!-]/g, "").trim();
  const chars = clean.length;
  const headings = (markdown.match(/^#{1,3}\s+/gm) || []).length;
  const tables = (markdown.match(/\n\s*\|?[\s:.-]+\|[\s|:.-]+\s*\n/g) || []).length;
  const minutes = Math.max(1, Math.ceil(chars / 550));
  return { chars, headings, tables, minutes };
}

function setStatus(text, ok = false) {
  els.status.textContent = text;
  els.status.classList.toggle("ok", ok);
  window.setTimeout(() => {
    els.status.textContent = "已同步";
    els.status.classList.add("ok");
  }, 1100);
}

function insertAtCursor(snippet) {
  const start = els.input.selectionStart;
  const end = els.input.selectionEnd;
  const before = els.input.value.slice(0, start);
  const after = els.input.value.slice(end);
  const prefix = before && !before.endsWith("\n") ? "\n\n" : "";
  const suffix = after && !after.startsWith("\n") ? "\n\n" : "";
  const text = `${prefix}${snippet}${suffix}`;
  els.input.value = `${before}${text}${after}`;
  const cursor = start + text.length;
  els.input.focus();
  els.input.setSelectionRange(cursor, cursor);
  update();
}

function update() {
  const template = getTemplate();
  const html = parseMarkdown(els.input.value, template);
  els.preview.innerHTML = html;
  els.preview.style.background = getColor(template, template.paper);
  els.htmlOutput.value = html;
  els.templateName.textContent = template.name;
  renderColorEditor(template);
  document.documentElement.style.setProperty("--accent", getColor(template, template.accent));
  document.querySelectorAll(".template-card").forEach((button) => {
    button.classList.toggle("active", button.dataset.template === template.id);
  });
  const stats = countStats(els.input.value);
  els.stats.innerHTML = [
    `字符数：<strong>${stats.chars}</strong>`,
    `标题层级：<strong>${stats.headings}</strong>`,
    `表格数量：<strong>${stats.tables}</strong>`,
    `预计阅读：<strong>${stats.minutes} 分钟</strong>`
  ].join("");
}

async function copyText(text, successText) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus(successText, true);
  } catch (error) {
    els.htmlOutput.value = text;
    els.htmlOutput.focus();
    els.htmlOutput.select();
    document.execCommand("copy");
    setStatus("已复制", true);
  }
}

async function copyRichHtml() {
  const html = els.htmlOutput.value;
  try {
    const blobHtml = new Blob([html], { type: "text/html" });
    const blobText = new Blob([els.input.value], { type: "text/plain" });
    await navigator.clipboard.write([new ClipboardItem({ "text/html": blobHtml, "text/plain": blobText })]);
    setStatus("已复制富文本", true);
  } catch (error) {
    await copyText(html, "已复制 HTML");
  }
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function todayName(ext) {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_公众号排版预览.${ext}`;
}

function bindEvents() {
  els.input.addEventListener("input", update);
  els.templateSelect.addEventListener("change", () => {
    update();
  });
  els.templateList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-template]");
    if (!button) return;
    els.templateSelect.value = button.dataset.template;
    els.templateSelect.dispatchEvent(new Event("change"));
  });
  els.fontSize.addEventListener("input", update);
  els.accentColor.addEventListener("input", () => {
    const template = getTemplate();
    getTemplateOverrides(template)[normalizeColor(template.accent)] = els.accentColor.value;
    update();
  });
  els.paperColor.addEventListener("input", () => {
    const template = getTemplate();
    getTemplateOverrides(template)[normalizeColor(template.paper)] = els.paperColor.value;
    update();
  });
  els.colorEditor.addEventListener("input", (event) => {
    const input = event.target.closest("input[type='color'][data-color-original]");
    if (!input) return;
    const template = getTemplate();
    getTemplateOverrides(template)[normalizeColor(input.dataset.colorOriginal)] = input.value;
    update();
  });
  els.colorEditor.addEventListener("click", (event) => {
    if (event.target.id !== "resetColors") return;
    const template = getTemplate();
    colorOverrides[template.id] = {};
    update();
    setStatus("颜色已重置", true);
  });
  els.previewWidth.addEventListener("change", () => {
    els.preview.classList.toggle("phone", els.previewWidth.value === "phone");
    els.preview.classList.toggle("wide", els.previewWidth.value === "wide");
  });
  document.getElementById("loadSample").addEventListener("click", () => {
    els.input.value = sampleMarkdown;
    update();
    setStatus("已载入示例", true);
  });
  document.getElementById("clearEditor").addEventListener("click", () => {
    els.input.value = "";
    update();
  });
  document.getElementById("copyMarkdown").addEventListener("click", () => copyText(els.input.value, "已复制 Markdown"));
  document.getElementById("insertImageScroll").addEventListener("click", () => {
    insertAtCursor(`::: image-scroll
![图片标题 1](https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80)
![图片标题 2](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80)
![图片标题 3](https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80)
:::
`);
    setStatus("已插入滑动图片", true);
  });
  document.getElementById("insertLinkScroll").addEventListener("click", () => {
    insertAtCursor(`::: link-scroll
[链接标题 1](https://example.com/) - 一句话说明这个链接的价值
[链接标题 2](https://example.com/) - 适合放原文、数据库或工具入口
[链接标题 3](https://example.com/) - 可横向滑动查看更多
:::
`);
    setStatus("已插入滑动链接", true);
  });
  document.getElementById("insertImageVScroll").addEventListener("click", () => {
    insertAtCursor(`::: image-vscroll
![结果图 A](https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80)
![结果图 B](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80)
![结果图 C](https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80)
:::
`);
    setStatus("已插入上下图片", true);
  });
  document.getElementById("insertLinkVScroll").addEventListener("click", () => {
    insertAtCursor(`::: link-vscroll
[链接标题 A](https://example.com/) - 适合放文献原文、数据库入口或工具链接
[链接标题 B](https://example.com/) - 上下滑动适合较长链接列表
[链接标题 C](https://example.com/) - 每个链接都可以带一句解释
[链接标题 D](https://example.com/) - 可继续追加更多条目
:::
`);
    setStatus("已插入上下链接", true);
  });
  document.getElementById("copyHtml").addEventListener("click", () => copyText(els.htmlOutput.value, "已复制 HTML"));
  document.getElementById("copyRich").addEventListener("click", copyRichHtml);
  document.getElementById("downloadHtml").addEventListener("click", () => {
    const doc = `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>公众号文章预览</title></head><body>${els.htmlOutput.value}</body></html>`;
    downloadFile(todayName("html"), doc, "text/html;charset=utf-8");
  });
  document.getElementById("downloadMd").addEventListener("click", () => downloadFile(todayName("md"), els.input.value, "text/markdown;charset=utf-8"));
  els.fileInput.addEventListener("change", async () => {
    const file = els.fileInput.files[0];
    if (!file) return;
    els.input.value = await file.text();
    update();
    setStatus("已导入文件", true);
    els.fileInput.value = "";
  });
}

renderTemplates();
els.input.value = sampleMarkdown;
els.accentColor.value = templates[0].accent;
els.paperColor.value = templates[0].paper;
bindEvents();
update();
