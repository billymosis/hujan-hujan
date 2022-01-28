-- CreateTable
CREATE TABLE "Station" (
    "station_number" SERIAL NOT NULL,
    "station_name" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "elevation" DOUBLE PRECISION,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("station_number")
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" SERIAL NOT NULL,
    "ddd_car" TEXT,
    "Tanggal" TEXT,
    "station_number" INTEGER,
    "Tn" DOUBLE PRECISION,
    "Tx" DOUBLE PRECISION,
    "Tavg" DOUBLE PRECISION,
    "RH_avg" DOUBLE PRECISION,
    "RR" DOUBLE PRECISION,
    "ss" DOUBLE PRECISION,
    "ff_x" DOUBLE PRECISION,
    "ddd_x" DOUBLE PRECISION,
    "ff_avg" DOUBLE PRECISION,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_station_number_fkey" FOREIGN KEY ("station_number") REFERENCES "Station"("station_number") ON DELETE NO ACTION ON UPDATE NO ACTION;
