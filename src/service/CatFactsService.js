import { useState, useEffect } from 'react'

import { CAT_FATCS_URL } from '../appConstants'

export function useGetCatFact () {
  const [catFact, setCatFact] = useState('Lorem ipsum testing text for the app')

  const getCatFact = () => {
    fetch(CAT_FATCS_URL)
      .then((response) => {
        if (!response.ok) throw new Error('There was an error with the response')

        return response.json()
      })
      .then(({ fact }) => {
        setCatFact(fact)
      })
  }

  useEffect(getCatFact, [])

  return [catFact, getCatFact]
}
