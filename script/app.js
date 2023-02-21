window.onload = () => {
	axios
		.get('/server.js')
		.then(function (response) {
			// handle success
			console.log(response);
		})
};
