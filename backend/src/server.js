import express from 'express';
import path from 'path'

const server = express()
const port = process.env.PORT || 3001;  //在production模式下获取前端的proxy端口，若找不到则使用3001
const __dirname = path.resolve()

server.listen(port, () => console.log('start listening...'))

server.get('/g', (req, res) => {
    res.send('I receive a get req!')
    console.log("I get a req");
})

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

