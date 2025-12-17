# Nano Banana 图片生成器

## 运行步骤

### 1. 安装依赖
在项目目录打开终端，运行：
```bash
npm install
```

### 2. 启动代理服务器
在同一个终端窗口运行：
```bash
npm start
```
这会在端口 3000 启动代理服务器。

### 3. 打开落地页
- 使用 VS Code 的 Live Server 打开 `Nano_Banana_Landing.html`
- 或者直接在浏览器中打开文件

### 4. 使用图片生成器
- 在文本框中输入想要生成的图片描述
- 点击"生成图片"按钮
- 等待几秒钟，图片会自动显示

## 说明

由于浏览器的CORS安全策略，前端无法直接调用 Replicate API。代理服务器作为一个中间层，将请求转发到 Replicate API，避免了跨域问题。

代理服务器会从 `.env` 文件读取 API 密钥，确保密钥安全。
## 项目状态

✅ Vercel部署配置已优化 - 显示静态产品介绍页面
✅ 服务器文件已清理 - 解决部署冲突
✅ 静态部署配置完成 - 确保正确显示

## 在线版本

**访问地址：** https://nano-banana-generator-rho.vercel.app/

在线版本展示了完整的产品介绍和功能演示界面，但实际的图片生成功能需要在本地运行。

## 完整功能使用

### 本地运行步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/kevincaostudio/nano-banana-generator.git
   cd nano-banana-generator
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置API密钥**
   - 编辑 `.env` 文件
   - 添加您的 Replicate API Key：`REPLICATE_API_KEY=your_api_key_here`

4. **启动代理服务器**
   ```bash
   npm start
   ```

5. **打开落地页**
   - 使用VSCode Live Server打开 `Nano_Banana_Landing.html`
   - 或者直接在浏览器中打开该文件

### 功能特点

- 🎨 **文生图**：用自然语言生成高质量图像
- ✏️ **图像编辑**：精准修改图片特定部分
- 📝 **文字渲染**：清晰准确的中文文字生成
- 🔄 **多图合成**：无缝融合多张图片元素
- ⚡ **高速生成**：Flash版本核心模型
- 🛡️ **安全合规**：内置内容安全过滤

## 文件说明

- `Nano_Banana_Landing.html` - 完整功能的落地页（需本地运行）
- `index.html` - 静态版本（用于Vercel部署）
- `server.js` - Node.js代理服务器（本地运行时使用）
- `package.json` - Node.js依赖配置

