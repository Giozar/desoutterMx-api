// puerto del servidor
export const PORT = process.env.PORT || 3000;

// Datos de conexión para la base de datos
// environment variables for database
export const db = {
    user: process.env.DBUSER || '',
    host: process.env.DBHOST || 'mongodb://127.0.0.1:27017/',
    database: process.env.DBDATABASE || 'desumex',
    password: process.env.DBPASSWORD || '',
    // puerto de la base de datos
    port: process.env.DBPORT || 27017
}
// puerto de comicación entre backend y frontend para cors
// port cors
export const clientPort = process.env.CLIENTPORT || 'http://localhost:4321';

// Parametros para email
export const Email = {
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailPort: process.env.EMAIL_PORT,
    emailHost: process.env.EMAIL_HOST,
    email: process.env.EMAIL,
};