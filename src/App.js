import express from "express"
import routes from "./Routes.js"

class App{
    constructor(){
        this.server = new express();
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }
}

export default new App()