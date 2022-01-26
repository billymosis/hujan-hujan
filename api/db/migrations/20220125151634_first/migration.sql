-- CreateTable
CREATE TABLE "Weather" (
    "ddd_car" TEXT,
    "Tanggal" TEXT,
    "station_number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Tn" REAL,
    "Tx" REAL,
    "Tavg" REAL,
    "RH_avg" REAL,
    "RR" REAL,
    "ss" REAL,
    "ff_x" REAL,
    "ddd_x" REAL,
    "ff_avg" REAL
);

-- CreateTable
CREATE TABLE "StationIndex" (
    "station_name" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "Elevation" REAL NOT NULL,
    "station_number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "StationIndex_station_number_fkey" FOREIGN KEY ("station_number") REFERENCES "Weather" ("station_number") ON DELETE NO ACTION ON UPDATE NO ACTION
);
