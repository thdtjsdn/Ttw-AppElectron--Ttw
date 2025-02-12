(function(){
	const NAME_FILE = 'nodejs.js';console.log(NAME_FILE);

	createServerHttp(80, 'web');

	/*/
(function(){
	function fn(){
		ServerLogger.log(1);
		setTimeout(fn,100);
	};
	setTimeout(fn,100);
})();
//*/
})();