module.exports = {
	entry: {
		app: './index.tsx'
	},
	output: {
		filename: "bundle.js"
	},
	resolve: {
		extensions : ['', '.js', '.tsx']
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader:"webpack-typescript?jsx=react&target=es5" }
		]
	}
}