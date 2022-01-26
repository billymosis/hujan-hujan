import { db } from 'src/lib/db'

export const stations = () => {
  return db.station.findMany()
}

export const station = ({ stationNumber }) => {
  return db.station.findUnique({
    where: { station_number: stationNumber },
    include: {
      _count: {
        select: {
          Weather: true,
        },
      },
    },
  })
}

// export const Station = {
//   Weather: (_obj, { root }) =>
//     db.station.findUnique({ where: { station_number: root.id } }).Weather(),
// }

export const Station = {
  Weather: (_obj, { root }) => {
    return db.station
      .findUnique({ where: { station_number: root.station_number } })
      .Weather()
  },
}
