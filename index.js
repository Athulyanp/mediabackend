//import json server package
const jsonserver=require('json-server')

//create jsonserver
const server=jsonserver.create()

const router=jsonserver.router("db.json")

//create middleware: it is used to parse and convert to js format
const middleware=jsonserver.defaults()

//create port for backend
const PORT=process.env.PORT||4000

//  middleware  used in server: json parde to js
server.use(middleware)
server.use(router)

//check :is server working
server.listen(PORT,()=>{
    console.log('media player server started at port:'+PORT);
})

