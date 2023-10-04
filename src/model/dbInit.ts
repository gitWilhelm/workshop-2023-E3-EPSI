import { prisma } from "./dbEngine.js";


export function insertMockData1() {
    prisma.tag.create({
        data: {
            id: 1,
            label: "PC-portable"
        }
    })
    prisma.tag.create({
        data: {
            id: 2,
            label: "PC-Fixe"
        }
    })
    prisma.tag.create({
        data: {
            id: 3,
            label: "Ecran 15.6\""
        }
    })
    prisma.tag.create({
        data: {
            id: 7,
            label: "Ecran 17\""
        }
    })
    prisma.tag.create({
        data: {
            id: 4,
            label: "2004"
        }
    })
    prisma.tag.create({
        data: {
            id: 5,
            label: "2005"
        }
    })
    prisma.tag.create({
        data: {
            id: 6,
            label: "2006"
        }
    })

    prisma.postAppareil.create({
        data: {
            label: "HP Pavilion PC portable",
            estFonctionnel: true,
            etat: "Bon état",
            descFonctionelle: 
                "Ordinateur portable HP pavilion en bon état, <br/>"
                + "Plutot lent, ne pas faire tourner de logiciel lourd comme des éditeurs d'image tel que photoshop. <br/>"
                + "Adapté pour une utilisation type navigation internet, consommation de media, visioconférences... <br/>"
                + "Windows 10 vierge installé avec license."
            ,
            descTechnique:
                "Système d'exploitation: Windows 10 <br/>"
                + "Capacité de stockage: 240 Go <br/>"
                + "Type de stockage: HDD <br/>"
                + "Processeur: Intel Core 2 Duo P8700 <br/>"
                + "Vitesse de processeur: 2.5 GHz <br/>"
                + "Ecran tactile: Non <br/>"
                + "Résolution: 1280 x 800"
                + "mémoire RAM: 4 Go"
                + "type de mémoire: DDR2"
        }
    })

    prisma.postAppareil.create({
        data: {
            label: "Dell PC Fixe slim",
            estFonctionnel: true,
            etat: "état correct",
            descFonctionelle: 
                "Ordinateur fixe de bureau Dell format slim, <br/>"
                + "Adapté pour toute utilisation bureautique simple, pas adapté pour faire du traitement lourd <br/>"
                + "tel que image ou video, mais adapté au traitement de texte, visioconférence, navigation internet... <br/>"
                + "Un peu lent, ne pas faire tourner de logiciel trop lourd comme des editeur vidéo. <br/>"
                + "Windows 10 vierge installé avec license."
            ,
            descTechnique:
                "Système d'exploitation: Windows 10 <br/>"
                + "Capacité de stockage: 500 Go <br/>"
                + "Type de stockage: HDD <br/>"
                + "Processeur: Intel Core 2 Duo P8700 <br/>"
                + "Vitesse de processeur: 2.5 GHz <br/>"
                + "type de mémoire: DDR3"
                + "mémoire RAM: 6 Go"
        }
    })

    prisma.postAppareil.create({
        data: {
            label: "HP Elitebook PC Portable",
            estFonctionnel: true,
            etat: "état correct",
            descFonctionelle: 
                "Ordinateur portable HP Elitebook, <br/>"
                + "Performances de niveau correct, <br/>"
                + "Adapté pour toute utilisation bureautique, pas adapté pour faire du traitement lourd, <br/>"
                + "mais adapté au traitement de texte, visioconférence, navigation internet... <br/>"
                + "Windows 10 vierge installé avec license."
            ,
            descTechnique:
                "Système d'exploitation: Windows 10 <br/>"
                + "Capacité de stockage: 500 Go <br/>"
                + "Type de stockage: HDD <br/>"
                + "Processeur: Intel Pentium 3 <br/>"
                + "Vitesse de processeur: 2.7 GHz <br/>"
                + "type de mémoire: DDR4"
                + "mémoire RAM: 6 Go"
        }
    })

    console.log("DONE DB INIT N°1")
}