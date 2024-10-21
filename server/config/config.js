const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.port || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || 
    "mongodb+srv://tnijjar2:Heisenberg91@cluster0.az44i.mongodb.net/" ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_POST ||'27017') + 
    '/mernproject'
};
module.exports = config;

// export default config