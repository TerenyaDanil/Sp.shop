module.exports = {
	addAwesome: function (str) {
		return str + ' Awesome!';
	},
};
if (module.hot) {
	module.hot.dispose(() => {
		document.body.removeEventListener('click', alert(123));
	});
}
