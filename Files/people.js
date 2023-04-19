const people = ["yoshi", "ryu", "chun-li", "mario"];
const ages = [20, 15, 30, 35];

console.log(people);
module.exports = "hello";
module.exports = { people: people, ages: ages };

const os = require("os");
console.log(os.platform(), os.homedir());
