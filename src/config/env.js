module.exports = {
    db: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        }
    },
    
    jwt: {
        secretKey: process.env.JWT_PASS,
        options: {
            expiresIn: '8h'
        }
    }    
}