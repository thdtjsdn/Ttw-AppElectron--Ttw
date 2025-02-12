console.log(1);

//----------------------------------------------------------------------------------------------------;

const CONFIG_MONGODB = {
	ADMIN_ID: 'admin',
	ADMIN_PW: '123qweasd',

	//*/
	PATH_SHELL: 'D:\\Development\\MongoDB_Shell\\2.3.8\\bin\\mongosh.exe',
	PATH_QUERY: 'D:\\Development\\MongoDB_Query\\'
	/*/
	PATH_SHELL: '/Users/thdtjsdn/Development/MongoDB_Shell/2.3.8/bin/mongosh',
	PATH_QUERY: '/Users/thdtjsdn/Development/MongoDB_Query/'
	//*/
};

//----------------------------------------------------------------------------------------------------;

(function () {
	UtilCLIDatabaseNoSQLMongoDB.executeQuery(
		function (data) { AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.executeQuery : ${data}`); },
		// function (data) { AppLogger.log(data, this); },
		'show dbs;',
		CONFIG_MONGODB.PATH_SHELL, CONFIG_MONGODB.ADMIN_ID, CONFIG_MONGODB.ADMIN_PW
	);

	UtilCLIDatabaseNoSQLMongoDB.executeQueryFile(
		function (data) { AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.executeQueryFile : ${data}`); },
		// function (data) { AppLogger.log(data, this); },
		CONFIG_MONGODB.PATH_QUERY + 'db-test-countDocuments.dbjs',
		CONFIG_MONGODB.PATH_SHELL, CONFIG_MONGODB.ADMIN_ID, CONFIG_MONGODB.ADMIN_PW
	);
})();

//----------------------------------------------------------------------------------------------------;

(function () {
	var result = UtilCLIDatabaseNoSQLMongoDB.syncExecuteQuery(
		'show dbs;',
		CONFIG_MONGODB.PATH_SHELL, CONFIG_MONGODB.ADMIN_ID, CONFIG_MONGODB.ADMIN_PW
	);
	AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.syncExecuteQuery : ${result}`, this);
	// AppLogger.log(data, this);

	var result = UtilCLIDatabaseNoSQLMongoDB.syncExecuteQueryFile(
		CONFIG_MONGODB.PATH_QUERY + 'db-test-countDocuments.dbjs',
		CONFIG_MONGODB.PATH_SHELL, CONFIG_MONGODB.ADMIN_ID, CONFIG_MONGODB.ADMIN_PW
	);
	AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.syncExecuteQueryFile : ${result}`, this);
	// AppLogger.log(data, this);
})();

