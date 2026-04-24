import { useEffect, useState } from 'react'
import { BASE_CAT_URL, CAT_FATCS_URL } from './appConstants'
import './app.css'

export function App () {
  const [catFact, setCatFact] = useState('Lorem ipsum testing text for the app')
  const [firstWord, setFirstWord] = useState(null)
  const [catImage, setCatImage] = useState('')

  useEffect(() => {
    getCatFact()
  }, [])

  useEffect(() => {
    if (!firstWord) return
    fetch(`${BASE_CAT_URL}cat/says/${firstWord}?json=true`)
      .then((response) => {
        if (!response.ok) throw new Error('The was something wrong with the image cat server')
        return response.json()
      })
      .then((catData) => {
        const { url } = catData
        console.log(url)
        setCatImage(url)
      })
  }, [firstWord])

  const getFirstWord = ({ sentence }) => {
    // return sentence.split(' ')[0]
    return sentence.split(' ').slice(0, 3).join(' ')
  }

  const getCatFact = () => {
    fetch(CAT_FATCS_URL)
      .then((response) => {
        if (!response.ok) throw new Error('There was an error with the response')

        return response.json()
      })
      .then(({ fact }) => {
        setCatFact(fact)
        const extractedWord = getFirstWord({ sentence: fact })
        setFirstWord(extractedWord)
      })
  }

  const handleOnClick = () => {
    getCatFact()
  }

  return (
    <main>
      <h1>This is the App Cat</h1>
      {catFact && <p>{catFact}</p>}
      {catImage && <img src={catImage} alt={`This is an image obtained for the API ${BASE_CAT_URL}`} />}
      <button onClick={handleOnClick}>Refresh</button>
    </main>
  )
}
