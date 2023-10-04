import fs from "fs"
import Koa from "koa"
import serve from "koa-static"

import * as pathtool from "path"

import { logOK } from "./lib/logger.js"
import { router } from "./router.js"
import { prisma } from "./model/dbEngine.js" // Database ORM import

import * as dbinit from "./model/dbInit.js"

let settings: {port?: number} = JSON.parse(
    fs.readFileSync("./settings.json", 'utf-8')
);

async function main() {
    const app = new Koa()
    app.use(router.routes())
    app.use(serve(pathtool.resolve("./public/")))
    const server = app.listen(settings.port || 8080)
    if (server.listening) logOK(`Web server started`)
}

// Closing the database when server shuts down
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })