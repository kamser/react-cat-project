import { useState, useEffect } from 'react'

import { BASE_CAT_URL } from '../appConstants'
import { getFirstThreeWords } from '../utils'

export function useGetCatImage ({ catFact }) {
  const [catImage, setCatImage] = useState(null)

  useEffect(() => {
    if (!catFact) return
    fetch(`${BASE_CAT_URL}cat/says/${getFirstThreeWords({ sentence: catFact })}?json=true`)
      .then((response) => {
        if (!response.ok) throw new Error('The was something wrong with the image cat server')
        return response.json()
      })
      .then((catData) => {
        const { url } = catData
        setCatImage(url)
      })
  }, [catFact])

  return [catImage]
}
