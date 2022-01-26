-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weather" (
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
    "ff_avg" REAL,
    CONSTRAINT "Weather_station_number_fkey" FOREIGN KEY ("station_number") REFERENCES "StationIndex" ("station_number") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Weather" ("RH_avg", "RR", "Tanggal", "Tavg", "Tn", "Tx", "ddd_car", "ddd_x", "ff_avg", "ff_x", "ss", "station_number") SELECT "RH_avg", "RR", "Tanggal", "Tavg", "Tn", "Tx", "ddd_car", "ddd_x", "ff_avg", "ff_x", "ss", "station_number" FROM "Weather";
DROP TABLE "Weather";
ALTER TABLE "new_Weather" RENAME TO "Weather";
CREATE TABLE "new_StationIndex" (
    "station_name" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "Elevation" REAL NOT NULL,
    "station_number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_StationIndex" ("Elevation", "latitude", "longitude", "station_name", "station_number") SELECT "Elevation", "latitude", "longitude", "station_name", "station_number" FROM "StationIndex";
DROP TABLE "StationIndex";
ALTER TABLE "new_StationIndex" RENAME TO "StationIndex";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
