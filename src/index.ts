import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from 'express'
import { startServer } from "./app";
import * as cors from 'cors'
import * as helmet from 'helmet'
import { connect } from "./database";

const main = async () => {
    connect()
    const app = await startServer()
    const port = 4000
    app.use(cors())
    app.use(helmet())
    app.use(express.json()) 
    app.listen(port)
    console.log(`API running in http://localhost:${port}/graphql`)
}

main()


