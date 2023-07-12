const { execute } = require("../DB/TDriver");


const getUsers = async() => {
    const resp = await execute('SELECT * FROM users');
    return resp;
}

module.exports = { getUsers: getUsers };