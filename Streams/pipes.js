const fs = require("fs");

const readStream = fs.createReadStream("./Streams/blog.txt");
const writeStream = fs.createWriteStream("./Streams/newBlog.txt");
readStream.pipe(writeStream);
