// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');
const resolve = require('path').resolve;


module.exports = {
    siteName: 'Intermtrans',
    plugins: [
        {
            use: 'gridsome-plugin-sass-resources-loader',
            options: {
                // provide path to the file with resources
                resources: [
                    path.resolve(__dirname, './src/assets/sass/_variables.scss'),
                    path.resolve(__dirname, './src/assets/sass/globals/*.scss')
                ]
            }
        }
    ],
};
