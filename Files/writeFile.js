const fs = require("fs");

fs.writeFile("./blog.txt", "hello girls", () => {
    console.log("File overwritten");
});

fs.writeFile("./blog-ladies.txt", "hello ladies", () => {
    console.log("File overwritten");
});
