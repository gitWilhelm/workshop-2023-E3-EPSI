import { prisma } from "./dbEngine.js";
import { PostListingData, PostData } from "../handlers/generalCtrl.js"

export async function bundlePostListingData(): Promise<PostListingData> {
    const postList: PostListingData = { post: [] }
    const prisma_response = await prisma.postAppareil.findMany()

    prisma_response.forEach(post => {
        let post_data: PostData = {
            id: -1,
            label: "",
            descFonctionelle: "",
            descTechnique: "",
            tag: []
        }
        post_data.id = post.id
        post_data.label = post.label
        post_data.descFonctionelle = post.descFonctionelle
        post_data.descTechnique = post.descTechnique

        postList.post.push(post_data)
    });

    return postList
}

export async function bundlePostData(id: number): Promise<PostData> {
    const post: PostData = {
        id: 0,
        label: "",
        descFonctionelle: "",
        descTechnique: "",
        tag: []
    }
    const prisma_response = await prisma.postAppareil.findUnique({
        where: {
            id
        }
    })

    post.id = id
    post.label = prisma_response.label
    post.descFonctionelle = prisma_response.descFonctionelle
    post.descTechnique = prisma_response.descTechnique
    post.tag = []

    return post
}
