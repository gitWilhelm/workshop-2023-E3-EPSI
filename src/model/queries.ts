import { prisma } from "./dbEngine.js";
import { PostListingData, PostData } from "../handlers/generalCtrl.js"

export function bundlePostListingData(): PostListingData {

    return {
        post: []
    }
}

export function bundlePostData(): PostData {

    return
}