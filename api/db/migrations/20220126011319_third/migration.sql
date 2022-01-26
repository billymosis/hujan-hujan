/*
  Warnings:

  - You are about to drop the `StationIndex` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Weather` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "StationIndex";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Weather";
PRAGMA foreign_keys=on;
