// path permite saber donde esta ubicado nuestro proyecto
const path = require('path');
// traemos el plugin de html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // punto de entrada de la aplicación
    entry: './src/index.js',
    // lugar al que saldrán todos los archivos
    output: {
        //en nuestro path, crea la carpeta dist
        path: path.resolve(__dirname, 'dist'),
        // nombre del archivo js resultante
        filename: 'bundle.js'
    },
    // extensión de archivos a tomar en cuenta
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        // reglas
        rules: [{
                // extensiones en las cuales actuará babel
                test: /\.(js|jsx)$/,
                // siempre excluir node modules 
                exclude: /node_modules/,
                use: {
                    // indicamos el loader a usar
                    loader: 'babel-loader'
                }
            },
            {
                // extensiones html
                test: /\.html$/,
                use: [{
                    // indicamos el loader a usar
                    loader: 'html-loader'
                }]
            }
        ]
    },
    // plugins 
    plugins: [
        // instanciamos el plugin para html 
        new HtmlWebpackPlugin({
            // archivo raíz a transformar
            template: './public/index.html',
            // archivo resultante
            filename: './index.html'
        })
    ]
}