const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log(_.toUpper("hello"));
    });

    greet();
    greet();

    console.log(req.url, req.method);

    //set header content type
    res.setHeader("Content-Type", "text/html");
    // res.write("<h1>hello ninjas</h1>");

    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            res.write(err.toString());
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});
