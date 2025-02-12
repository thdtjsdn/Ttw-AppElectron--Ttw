console.log(1);

//----------------------------------------------------------------------------------------------------;

const CONFIG_MONGODB = {
	//*/
	PATH_SHELL: 'D:\\Development\\MongoDB_Shell\\2.3.8\\bin\\mongosh.exe',
	PATH_QUERY: 'D:\\Development\\MongoDB_Query\\',
	/*/
	PATH_SHELL: '/Users/thdtjsdn/Development/MongoDB_Shell/2.3.8/bin/mongosh',
	PATH_QUERY: '/Users/thdtjsdn/Development/MongoDB_Query/',
	//*/

	//*/
	//<id>,<password>,<server address>, <enter database>는 맞는 정보로 <>도 지우고 변경하면 됨
	//MONGODB_SRV: '"mongodb+srv://<id>:<password>@<server address>.mongodb.net/<enter database>"'
	MONGODB_SRV: '"mongodb+srv://asd:123qweasd@<server address>.mongodb.net/admin"'
	//*/
};

//----------------------------------------------------------------------------------------------------;

(function () {
	UtilCLIDatabaseNoSQLMongoDB.executeQuery(
		function (data) { AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.executeQuery : ${data}`); },
		// function (data) { AppLogger.log(data, this); },
		'show dbs;',
		CONFIG_MONGODB.PATH_SHELL,
		null, null, null, null,
		CONFIG_MONGODB.MONGODB_SRV
	);

	UtilCLIDatabaseNoSQLMongoDB.executeQueryFile(
		function (data) { AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.executeQueryFile : ${data}`); },
		// function (data) { AppLogger.log(data, this); },
		CONFIG_MONGODB.PATH_QUERY + 'db-test-countDocuments.dbjs',
		CONFIG_MONGODB.PATH_SHELL,
		null, null, null, null,
		CONFIG_MONGODB.MONGODB_SRV
	);
})();

//----------------------------------------------------------------------------------------------------;

(function () {
	var result = UtilCLIDatabaseNoSQLMongoDB.syncExecuteQuery(
		'show dbs;',
		CONFIG_MONGODB.PATH_SHELL,
		null, null, null, null,
		CONFIG_MONGODB.MONGODB_SRV
	);
	AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.syncExecuteQuery : ${result}`, this);
	// AppLogger.log(data, this);

	var result = UtilCLIDatabaseNoSQLMongoDB.syncExecuteQueryFile(
		CONFIG_MONGODB.PATH_QUERY + 'db-test-countDocuments.dbjs',
		CONFIG_MONGODB.PATH_SHELL,
		null, null, null, null,
		CONFIG_MONGODB.MONGODB_SRV
	);
	AppLogger.log(`UtilCLIDatabaseNoSQLMongoDB.syncExecuteQueryFile : ${result}`, this);
	// AppLogger.log(data, this);
})();

