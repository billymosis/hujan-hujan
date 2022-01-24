-- CreateTable
CREATE TABLE "Weather" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "station_number" INTEGER NOT NULL,
    "Tanggal" DATETIME NOT NULL,
    "Tn" REAL NOT NULL,
    "Tx" REAL NOT NULL,
    "Tavg" REAL NOT NULL,
    "RH_avg" REAL NOT NULL,
    "RR" REAL NOT NULL,
    "ss" REAL NOT NULL,
    "ff_x" REAL NOT NULL,
    "ddd_x" REAL NOT NULL,
    "ff_avg" REAL NOT NULL,
    "ddd_car" TEXT NOT NULL
);
