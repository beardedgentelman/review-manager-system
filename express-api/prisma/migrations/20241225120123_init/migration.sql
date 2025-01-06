-- CreateTable
CREATE TABLE "Review"
(
    "id"        INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title"     TEXT     NOT NULL,
    "content"   TEXT     NOT NULL,
    "rating"    INTEGER  NOT NULL DEFAULT 0,
    "author"    TEXT     NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
