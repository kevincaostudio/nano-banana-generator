const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 代理路由
app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await fetch('https://api.replicate.com/v1/predictions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.REPLICATE_API_KEY || 'r8_05J8QFlBJyzqqcuK272rlPPXqbPRJGm16ynyV'}`,
                'Content-Type': 'application/json',
                'Prefer': 'wait'
            },
            body: JSON.stringify({
                version: 'b6a6d76845f4f0bb35cb47839308c45e66b13eeccbcc5b8dcdc9ed6f726ed7fe',
                input: {
                    prompt: prompt
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || '生成失败');
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error('代理服务器错误:', error);
        res.status(500).json({
            error: error.message || '服务器内部错误'
        });
    }
});

// 根路径 - 显示状态信息
app.get('/', (req, res) => {
    res.send(`
        <h1>Nano Banana 代理服务器</h1>
        <p>✅ 代理服务器运行正常</p>
        <p>📍 API端点: http://localhost:3000/api/generate</p>
        <p>📝 请在另一个窗口打开 <a href="http://localhost:5500/Nano_Banana_Landing.html">Nano Banana 落地页</a> 来使用图片生成器</p>
        <br>
        <p><strong>注意：</strong>请确保Live Server也在运行（通常在端口5500）</p>
    `);
});

// 健康检查
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: '代理服务器运行正常' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`代理服务器运行在 http://localhost:${PORT}`);
    console.log('请在新的终端窗口运行此服务器，然后用Live Server打开HTML文件');
});