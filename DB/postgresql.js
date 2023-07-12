const { Client } = require('pg');

// Extrae los parámetros de conexión del External Database URL
const databaseUrl = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.SERVER}.oregon-postgres.render.com/${process.env.DATABASE}`; // Reemplaza 'tu_external_database_url' con tu URL real

class postgresql {
  constructor() {
    this.connection = new Client({
      connectionString: databaseUrl,
      ssl: {
        rejectUnauthorized: true,
      },
    });
  }

  async executeQuery(query) {
    try {
      await this.connection.connect();
      let result = await this.connection.query(query);
      return result.rows;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  }
}

module.exports = postgresql;