const postgresql = require("./postgresql");
const sqlsrv = require("./sqlsrv");

const clases = {
    sqlsrv,
    postgresql
};

class TDriver {

    constructor(){
        this.link = new clases[process.env.TYPE]();
    }

    async doExecute(query) {
        return await this.link.executeQuery(query);
    }
}

const execute = async(query) => {
    const driver = new TDriver();
    return await driver.doExecute(query);
    
}

module.exports = { execute }