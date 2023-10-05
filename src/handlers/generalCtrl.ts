//import { Context } from "koa";
import { Middleware } from "@koa/router";
import { eta } from "../config.js"

import { bundlePostListingData, bundlePostData } from "../model/queries.js"

import { logINFO } from "../lib/logger.js";

export const index: Middleware = ({request, response}) => {
    response.status = 200
    response.body = eta.render("index",{
        title: "TODO"
    })
}

export const test: Middleware = async ({request, response}) => {
    response.status = 200
    const data: PostListingData = await bundlePostListingData()
    response.body = eta.render("exemple", {
        title: "exemple de passage de titre",
        data
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

export const deviceListing: Middleware = async ({request, response}) => {
    response.status = 200
    const data: PostListingData = await bundlePostListingData()
    logINFO( JSON.stringify(data) )
    response.body = eta.render("deviceListing", {
        title: "Liste Appareils",
        data
    })
}

export const componentListing: Middleware = async ({request, response}) => {
    response.status = 200
    const data: PostListingData = await bundlePostListingData()
    response.body = eta.render("componentListing", {
        title: "Liste Produits Composants",
        data
    })
}

export const postDetails: Middleware = async ({request, response}) => {
    response.status = 200
    const id: number = parseInt(request.query.id[0])
    const data: PostData = await bundlePostData(id)
    logINFO( JSON.stringify(data) )
    response.body = eta.render("postDetail", {
        title: "TODO",
        data
    })
}