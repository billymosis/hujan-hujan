import { db } from 'src/lib/db'

export const weathers = () => {
  return db.weather.findMany()
}

export const weather = ({ id }) => {
  return db.weather.findUnique({
    where: { id },
  })
}

export const createWeather = ({ input }) => {
  return db.weather.create({
    data: input,
  })
}

export const updateWeather = ({ id, input }) => {
  return db.weather.update({
    data: input,
    where: { id },
  })
}

export const deleteWeather = ({ id }) => {
  return db.weather.delete({
    where: { id },
  })
}
