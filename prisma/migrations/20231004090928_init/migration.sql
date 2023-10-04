/*
  Warnings:

  - Added the required column `descFonctionelle` to the `PostAppareil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descTechnique` to the `PostAppareil` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostAppareil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ref" TEXT,
    "label" TEXT NOT NULL,
    "descFonctionelle" TEXT NOT NULL,
    "descTechnique" TEXT NOT NULL,
    "estFonctionnel" BOOLEAN NOT NULL,
    "etat" TEXT NOT NULL
);
INSERT INTO "new_PostAppareil" ("estFonctionnel", "etat", "id", "label", "ref") SELECT "estFonctionnel", "etat", "id", "label", "ref" FROM "PostAppareil";
DROP TABLE "PostAppareil";
ALTER TABLE "new_PostAppareil" RENAME TO "PostAppareil";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
