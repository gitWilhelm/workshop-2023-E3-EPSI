import Router from "@koa/router"

import * as generalCtrl from "./handlers/generalCtrl.js"

export const router = new Router();

router.get("/", generalCtrl.index)
router.get("/liste-produits", generalCtrl.deviceListing)
router.get("/liste-composants")
router.get("/fiche-produit")
router.get("/exemple", generalCtrl.test)