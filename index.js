exports.compile = function(path) {
	return "var jade = require('hem-compiler-jade/runtime'); module.exports = "+
	require('jade').compile(
		require('fs').readFileSync(path, 'utf8'),
		{
			filename: path,
			client: true,
			debug: '-d' in process.argv || '--debug' in process.argv,
			compileDebug: '-d' in process.argv || '--debug' in process.argv
		}
	).toString()
}

