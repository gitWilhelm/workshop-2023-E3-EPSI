import { Context } from "koa";
import { Middleware } from "@koa/router";
import { eta } from "../config.js"

export const index: Middleware = ({request, response}) => {
    response.status = 200
    response.body = {msg: "works"}
}

export const test: Middleware = ({request, response}) => {
    response.status = 200
    response.body = eta.render("exemple", {
        title: "exemple de passage de titre",
        msg: request.query.msg || "exemple de passage de donnée"
    })
}