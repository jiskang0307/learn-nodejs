// console.log("후츠릿")
// console.log(1+1)

const http = require("http");
const server = http.createServer((req, res) => {
    //req: request로 FE로받은 데이터
    //res: response로 FE에 전달하는 응답값
    res.statusCode = 200; //200이라는 상태코드 응답. 400대나 500대는 서버에러.
    res.setHeader("Content-Type", "text/plain"); //응답 헤더 세팅 
    res.end("hello world!"); //클라이언트에게 응답할 데이터.
});

server.listen(8080, () => {
    console.log("Server ON!")
});