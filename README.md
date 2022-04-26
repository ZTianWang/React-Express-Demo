# CRA+Express Demo

## Set the proxy in client app's package.json
"proxy" : "http://localhost:3001/",

## Create a production-ready build of CRA apps
`npm build`

## Install `cross-env` in backend
npm i --save-dev cross-env

## Set running in production model of backend
Add above code in package.json:
"production": "cross-env NODE_ENV=production nodemon src/server.js"

## Add codes in server.js
// 若在production模式下运行，则暴露前端的build目录(放在最后)
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production!');

    // Make all files in that folder public
    server.use(express.static(path.join(__dirname, '../frontend/build')));

    // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}

## Run project in production model
`yarn run production`

