//import { Context } from "koa";
import { Middleware } from "@koa/router";
import { eta } from "../config.js"

import { bundlePostListingData, bundlePostData } from "../model/queries.js"

export const index: Middleware = ({request, response}) => {
    response.status = 200
    response.body = eta.render("index",{
        title: "TODO"
    })
}

export const test: Middleware = ({request, response}) => {
    response.status = 200
    response.body = eta.render("exemple", {
        title: "exemple de passage de titre",
        msg: request.query.msg || "exemple de passage de donnée"
    })
}

export interface PostData {
    id: number
    label: string
    descFonctionelle: string
    descTechnique: string
    tag: Array<string>
}

export interface PostListingData {
    post: Array<PostData>
}

export const deviceListing: Middleware = ({request, response}) => {
    response.status = 200
    const data: PostListingData = bundlePostListingData()
    response.body = eta.render("deviceListing", {
        title: "Liste Appareils",
        data
    })
}

export const componentListing: Middleware = ({request, response}) => {
    response.status = 200
    const data: PostListingData = bundlePostListingData()
    response.body = eta.render("componentListing", {
        title: "Liste Produits Composants",
        data
    })
}

export const postDetails: Middleware = ({request, response}) => {
    response.status = 200
    const data: PostData = bundlePostData()
    response.body = eta.render("postDetail", {
        title: "TODO",
        data
    })
}