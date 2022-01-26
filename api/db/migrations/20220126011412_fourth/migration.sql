-- CreateTable
CREATE TABLE "Station" (
    "station_number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "station_name" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "elevation" REAL
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ddd_car" TEXT,
    "Tanggal" TEXT,
    "station_number" INTEGER,
    "Tn" REAL,
    "Tx" REAL,
    "Tavg" REAL,
    "RH_avg" REAL,
    "RR" REAL,
    "ss" REAL,
    "ff_x" REAL,
    "ddd_x" REAL,
    "ff_avg" REAL,
    CONSTRAINT "Weather_station_number_fkey" FOREIGN KEY ("station_number") REFERENCES "Station" ("station_number") ON DELETE NO ACTION ON UPDATE NO ACTION
);
