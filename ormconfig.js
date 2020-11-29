module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    `./${process.env.ORM_CONFIG_URL}/models/*.${process.env.ORM_CONFIG_EXTENSION}`
  ],
  "migrations": [
    `./${process.env.ORM_CONFIG_URL}/database/migrations/*.${process.env.ORM_CONFIG_EXTENSION}`
  ],
  "cli": {
    "migrationsDir": `./src/database/migrations`
  }
}
