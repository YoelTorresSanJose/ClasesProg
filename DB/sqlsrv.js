const sql = require('mssql');

class sqlsrv {
    config = {
        user: process.env.USER,
        password: process.env.PASSWORD,
        server: process.env.SERVER,
        database: process.env.DATABASE,
        port: process.env.PORT_DB,
        options: {
            trustedConnection: false,
            enableArithAbort: true,
            encrypt: false,
        }
    };

    constructor() {
        this.connection = sql.connect(config)
    }

    async executeQuery(query) {
        try {
            let result = await this.connection.query(query);
            return result.recordsets[0];
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = sqlsrv;
