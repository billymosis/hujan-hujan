// export const QUERY = gql`
//   query FindWeatherListQuery($page: 2) {
//     weatherPage(page: $page) {
//       weathers {
//         id
//         Tanggal
//       }
//       count
//     }
//   }
// `

export const QUERY = gql`
  query weathersQuery($page: Int, $dataCount: Int) {
    weatherPage(page: $page, dataCount: $dataCount) {
      weathers {
        id
        Tanggal
      }
      count
    }
  }
`
export const Loading = () => {
  return <div>Loading...</div>
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ weatherPage }) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(weatherPage, undefined, 2)}</code>
      </pre>
    </div>
  )
}
