const fs = require("fs");

fs.readFile("./blog.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
});
