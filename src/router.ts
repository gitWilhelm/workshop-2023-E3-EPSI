import Router from "@koa/router"

import * as generalCtrl from "./handlers/generalCtrl.js"

export const router = new Router();

router.get("/", generalCtrl.index)
router.get("/liste-produits", generalCtrl.deviceListing)
router.get("/liste-composants", generalCtrl.componentListing)
router.get("/fiche-produit", generalCtrl.postDetails)

router.get("/test", generalCtrl.test)