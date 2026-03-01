import dotenv from 'dotenv';
import { ChatOpenAI } from '@langchain/openai';

// 加载本地 .env 配置，提供模型调用所需环境变量。
dotenv.config();

// 初始化聊天模型，默认回退到 qwen-coder-turbo。
const model = new ChatOpenAI({ 
    modelName: process.env.MODEL_NAME || "qwen-coder-turbo",
    apiKey: process.env.OPENAI_API_KEY,
    configuration: {
        baseURL: process.env.OPENAI_BASE_URL,
    },
});

// 发送简单问候请求并输出模型回复。
const response = await model.invoke("介绍下自己");
console.log(response.content);
