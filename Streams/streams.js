const fs = require("fs");

const readStream = fs.createReadStream("./Streams/blog.txt");
const writeStream = fs.createWriteStream("./Streams/newBlog.txt");
readStream.on("data", (chunk) => {
    console.log("----- New Chunk -----");
    console.log(chunk);
    writeStream.write("\n----New Chunk----\n");
    writeStream.write(chunk);
});
