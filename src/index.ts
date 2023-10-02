import fs from "fs"
import Koa from "koa"

import { router } from "./router.js"

let settings: {port?: number} = JSON.parse(
    fs.readFileSync("./settings.json", 'utf-8')
);

const app = new Koa()

app.use(router.routes())

app.listen(settings.port || 8080)