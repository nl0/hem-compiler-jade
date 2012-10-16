exports.compile = function(path) {
	return "module.exports = "+
	require('jade').compile(
		require('fs').readFileSync(path, 'utf8'),
		{
			filename: path,
			client: true,
			debug: '-d' in process.argv || '--debug' in process.argv,
			compileDebug: '-d' in process.argv || '--debug' in process.argv
		}
	)
}

