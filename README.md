# 静心学堂课程

欢迎来到静心学堂课程内容库！本项目为静心学堂学员提供了一个便捷的在线课程查询平台。

## 项目介绍

- **目标**: 为静心学堂学员提供课程"纯"文本查询服务
- **技术栈**: GitHub Pages + Jekyll + Markdown
- **访问地址**: [http://mindfulpeace.github.io](http://mindfulpeace.github.io)

## 目录结构说明

课程内容按照初级（同喜）、中级（同修）、高级（同德）三个等级进行组织：

```
/
├── index.md                  # 首页
├── g1/                       # 初级：同喜(第1级)
│   ├── u1/                   # 第 1 单元
│   │   ├── fc.md             # 本单元复习辅材
│   │   ├── 01/               # 第01课
│   │   │   ├── index.md      # 本课法义
│   │   │   ├── fc.md         # 本课辅材
│   │   │   └── ...           # 本课其他内容 如：MP3,PDF
│   │   └── ...
│   └── ....
├── g2/                       # 中级：同修(第2级)
│   ├── s1/                   # 第一阶段
│   │   ├── 01/               # 第01课
│   │   ├── dcd/              # 道次第(经论名用拼音首字母)
│   │   │   ├── 01/           # 第01课
│   │   │   │   ├── index.md  # 本课法义
│   │   │   │   ├── fc.md     # 本课辅材
│   │   │   │   └── ...       # 本课其他内容 如：MP3,PDF
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── g3/                       # 高级：同德
│   └── ...
└── ...                       # _网站代码文件等
```

## 贡献

随喜师兄一起维护课程 MD 文本。

## 本地开发

### 方案一：使用 Docker（推荐）

1. 安装 Docker Desktop
2. 在项目根目录下创建 `Dockerfile`：
   ```dockerfile
   FROM jekyll/jekyll:4.2.0
   COPY Gemfile .
   COPY Gemfile.lock .
   RUN bundle install
   ```
3. 构建镜像：
   ```
   docker build -t mindfulpeace-jekyll .
   ```
4. 启动容器：
   ```
   docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 mindfulpeace-jekyll jekyll serve --watch --force_polling
   ```

### 方案二：升级 Ruby 环境

1. 安装 rbenv 或 rvm
2. 使用 rbenv 安装 Ruby 3.1.0：
   ```
   rbenv install 3.1.0
   rbenv local 3.1.0
   ```
3. 安装 bundler：
   ```
   gem install bundler
   ```
4. 安装依赖：
   ```
   bundle install
   ```
5. 启动服务器：
   ```
   bundle exec jekyll serve
   ```

### 方案三：使用 GitHub Codespaces（如果项目启用了此功能）

1. 在 GitHub 仓库页面点击 "Code" 按钮
2. 选择 "Open with Codespaces"
3. 创建新的 Codespace
4. 在终端中运行：
   ```
   bundle install
   bundle exec jekyll serve
   ```