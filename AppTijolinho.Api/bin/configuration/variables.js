const variables ={
    Api:{
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://admin:admin@cluster0-shard-00-00.msovb.mongodb.net:27017,cluster0-shard-00-01.msovb.mongodb.net:27017,cluster0-shard-00-02.msovb.mongodb.net:27017/app-tijolinho?ssl=true&replicaSet=atlas-pozqml-shard-0&authSource=admin&retryWrites=true&w=majority'
        //connection: process.env.connection || 'mongodb+srv://admin:admin@cluster0.msovb.mongodb.net/?retryWrites=true&w=majority'
    }
}
module.exports=variables;