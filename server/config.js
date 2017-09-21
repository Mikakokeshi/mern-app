const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://Mikakokeshi:Z8LuGuge@cluster0-shard-00-00-x8veh.mongodb.net:27017,cluster0-shard-00-01-x8veh.mongodb.net:27017,cluster0-shard-00-02-x8veh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  port: process.env.PORT || 7000,
};

export default config;
