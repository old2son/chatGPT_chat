const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World')
});
app.listen(3000);
console.log('服务器开启成功');
// (async () => {
// 	const configuration = new Configuration({
// 		apiKey: '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',
// 	});
// 	const openai = new OpenAIApi(configuration);
// 	const response = await openai.createCompletion({
// 		model: 'text-davinci-003',
// 		prompt: '你叫什么',
// 		max_tokens: 255,
// 		temperature: 0.5,
// 	});
// 	console.log(response.data);
// 	return response.data;
// })();
