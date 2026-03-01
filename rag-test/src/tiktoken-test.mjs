import { getEncoding, getEncodingNameForModel } from "js-tiktoken"; 

// 选择模型并获取其对应的 tokenizer 编码名称。
const modelName = "gpt-4"; 
const encodingName = getEncodingNameForModel(modelName);
console.log(encodingName);

// 使用 cl100k_base 编码器，比较中英文词语的 token 长度。
const enc = getEncoding("cl100k_base");
console.log('apple', enc.encode("apple").length);
console.log('pineapple', enc.encode("pineapple").length);
console.log('苹果', enc.encode("苹果").length);
console.log('吃饭', enc.encode("吃饭").length);
console.log('一二三', enc.encode("一二三").length);
