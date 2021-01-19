import Server from './server/server'
import router from './routes/router';
import { sequelize } from "./bd/bd"

const server = Server.init(3900);

server.app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.app.use(router);
server.start(()=>{
    console.log('Servidor Corriendo');
    sequelize.authenticate().then(async() => {
        console.log("database connected")

        try {
            await sequelize.sync({force: true})
        } catch (error) {
            console.log(error.message)
        }

    }).catch( (e: any) => {
        console.log(e.message)
    })
});