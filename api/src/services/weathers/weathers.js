import { db } from 'src/lib/db'

export const weathers = () => {
  return db.weather.findMany()
}

export const weather = ({ id }) => {
  return db.weather.findUnique({
    where: { id },
  })
}

export const weatherPage = ({ page = 1, dataCount = 5 }) => {
  const offset = (page - 1) * dataCount

  return {
    weathers: db.weather.findMany({
      take: dataCount,
      skip: offset,
    }),
    count: db.weather.count(),
  }
}

export const weatherRange = ({ stationNumber, from, to }) => {
  const date = new Date(from)
  date.setDate(date.getDate() - 1)
  return {
    weathers: db.weather.findMany({
      where: {
        AND: [
          {
            Tanggal: {
              gte: date,
              lt: to,
            },
          },
          {
            station_number: stationNumber,
          },
        ],
      },
    }),
    Station: db.station.findUnique({
      where: {
        station_number: stationNumber,
      },
    }),
  }
}

export const Weather = {
  Station: (_obj, { root }) =>
    db.weather.findUnique({ where: { id: root.id } }).Station(),
}
