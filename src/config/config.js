// puerto del servidor
export const PORT = process.env.PORT || 3000;

// Datos de conexión para la base de datos
// environment variables for database
export const db = {
    user: process.env.DBUSER || 'postgres',
    host: process.env.DBHOST || 'localhost',
    database: process.env.DBDATABASE || 'desumex',
    password: process.env.DBPASSWORD || 'root123',
    // puerto de la base de datos
    port: process.env.DBPORT || 5432
}
// puerto de comicación entre backend y frontend para cors
// port cors
export const clientPort = process.env.CLIENTPORT || 'http://localhost:4321';