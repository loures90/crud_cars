const uuid = require("uuid");

const idGenerator = () => {
    return uuid.v4()
}
module.exports = idGenerator;
