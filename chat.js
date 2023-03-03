const { Configuration, OpenAIApi } = require('openai');

const chat = () => {
	(async () => {
	    const configuration = new Configuration({
	        apiKey: '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',
	    });
	    const openai = new OpenAIApi(configuration);
	    const response = await openai.createCompletion({
	        model: 'text-davinci-003',
	        prompt: `给我随机文章`,
	        max_tokens: 2000,
	        temperature: 0.5,
	        // stop: ['\n'],    // 停止序列标识
	    });

	    // const response = await openai.createCompletion({
	    //     model: 'text-davinci-003',
	    //     prompt: '给我一段文字',
	    //     temperature: 0,
	    //     max_tokens: 2000,
	    //     top_p: 1.0,
	    //     frequency_penalty: 0.2,
	    //     presence_penalty: 0.0,
	    //     stop: ['\n'],
	    // });
	    console.log(response.data);
	    return response.data;
	})();

	// (async () => {
	// 	const configuration = new Configuration({
	// 		apiKey: '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',
	// 	});
	// 	const openai = new OpenAIApi(configuration);
	// 	const completion = await openai.createChatCompletion({
	// 		model: 'gpt-3.5-turbo',
	// 		messages: [{ role: 'user', content: '你好' }],
	// 	});
	// 	console.log(completion.data.choices[0].message);

	// 	// return response.data;
	// })();
};

// exports.chat = chat;
// module.exports = chat;
chat();
