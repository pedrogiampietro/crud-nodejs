module.exports = {
  type: 'postgres',
  port: `${process.env.POSTGRES_PORT}`,
  host: 'localhost',
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DB}`,
  migrations: ['./src/database/migrations/**.ts'],
  entities: ['./src/database/entities/**.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  logging: ['error'],
};
