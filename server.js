const express = require('express');
const app = express();
const os = require('os');

//获取本机ip
let getIPAdress = function() {
    let interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

app.options('/api/hello', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
  });

// 暴露public下的文件
app.use(express.static('public')); 

// 设置header解决跨域
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     next();
// });
// cors包解决跨域
const cors = require('cors');
app.use(cors());

// 测试接口
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello World' });
});

const chat = require('./chat');
app.get('/api/chat', (req, res) => {
    // chat();
    res.send({ message: 'chat' });
});



const port = process.env.PORT || 3000; // process.env Node 环境对象
app.listen(port, () => {
    console.log(`服务器开启成功, 本机地址: http://${getIPAdress()}:${port}`);
});

