// console.log("후츠릿")
// console.log(1+1)

const http = require("http");
const fs = require('fs'); //파일 시스템 모듈(html파일 읽기 위함)
const path = require('path'); //경로처리를 위한 모듈

const server = http.createServer((req, res) => {
    //req: request로 FE로받은 데이터
    //res: response로 FE에 전달하는 응답값
    // res.statusCode = 200; //200이라는 상태코드 응답. 400대나 500대는 서버에러.
    // res.setHeader("Content-Type", "text/plain"); //응답 헤더 세팅 
    // res.end("hello world!"); //클라이언트에게 응답할 데이터.
    
    //1. GET 2. POST 3. PUT 4. DELETE
    if (req.method === "GET") {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, "index.html"), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error")
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data)
                }
            }) 
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, "about.html"), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error")
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data)
                }
            })
        } else if (req.url === '/contact') {
            fs.readFile(path.join(__dirname, "contact.html"), 'utf-8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error")
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data)
                }
            })
        }
    }
});
           

server.listen(8080, () => {
    console.log("Server ON!")
    console.log("🚀  __dirname:", __dirname)
});