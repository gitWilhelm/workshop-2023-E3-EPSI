-- CreateTable
CREATE TABLE "PostAppareil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ref" TEXT,
    "label" TEXT NOT NULL,
    "estFonctionnel" BOOLEAN NOT NULL,
    "etat" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TagsAuxPosts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TagsAuxPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "PostAppareil" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TagsAuxPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagsAuxPosts_AB_unique" ON "_TagsAuxPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_TagsAuxPosts_B_index" ON "_TagsAuxPosts"("B");
