import { Context } from "koa";
import { Middleware } from "@koa/router";
import { eta } from "../config.js"

export const index: Middleware = ({request, response}) => {
    response.status = 200
    response.body = {msg: "works"}
}
