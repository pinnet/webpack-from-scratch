const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader'
                }
            }
            
        ]        
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
    ]
};
