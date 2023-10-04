import fs from "fs"
import Koa from "koa"

import { logOK } from "./lib/logger.js"
import { router } from "./router.js"

let settings: {port?: number} = JSON.parse(
    fs.readFileSync("./settings.json", 'utf-8')
);

const app = new Koa()

app.use(router.routes())

const server = app.listen(settings.port || 8080)

if (server.listening) logOK(`Web server started`)