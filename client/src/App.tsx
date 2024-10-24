import './App.css'
import {useQuery, gql} from '@apollo/client'

const GET_DATA = gql`
  query Query {
    hello
  }
`

function App() {
  const {loading, error, data} = useQuery(GET_DATA);
  if(loading) {
    return <div>loading</div>
  }
  if(error) {
    return <div>opps..., error</div>
  }
  return (
    <>
      data: {JSON.stringify(data)}
    </>
  )
}

export default App
