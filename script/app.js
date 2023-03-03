window.onload = () => {
	axios
		.get('http://192.168.1.6:3000/api/hello')
		.then((response) => {
			// handle success
			console.log(response);
		});

	// fetch('http://192.168.1.6:3000/api/hello')
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		const message = data.message;
	// 		console.log(message);
	// 	});
};
