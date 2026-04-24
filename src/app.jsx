import { useGetCatFact } from './service/CatFactsService'

import { BASE_CAT_URL } from './appConstants'
import './app.css'
import { useGetCatImage } from './service/CatImageService'

export function App () {
  const [catFact, getCatFact] = useGetCatFact()
  const [catImage] = useGetCatImage({ catFact })

  return (
    <main>
      <h1>This is the App Cat</h1>
      {catFact && <p>{catFact}</p>}
      {catImage && <img src={catImage} alt={`This is an image obtained for the API ${BASE_CAT_URL}`} />}
      <button onClick={getCatFact}>Refresh</button>
    </main>
  )
}
