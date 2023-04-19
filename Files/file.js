const fs = require("fs");
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("folder deleted");
        }
    });
}
