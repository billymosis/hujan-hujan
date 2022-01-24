/*
  Warnings:

  - You are about to drop the `Weather` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Weather";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "my_weather" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "station_number" INTEGER,
    "Tanggal" DATETIME,
    "Tn" REAL,
    "Tx" REAL,
    "Tavg" REAL,
    "RH_avg" REAL,
    "RR" REAL,
    "ss" REAL,
    "ff_x" REAL,
    "ddd_x" REAL,
    "ff_avg" REAL,
    "ddd_car" TEXT
);

-- CreateTable
CREATE TABLE "station_index" (
    "station_name" TEXT,
    "latitude" DECIMAL,
    "longitude" DECIMAL,
    "elevation" DECIMAL,
    "station_number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
