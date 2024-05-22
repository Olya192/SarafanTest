import { useAppSelector } from "./hooks"

const host: string = 'https://api.spoonacular.com/recipes/'

export async function getCards(query: string, page: number) {

  let url = new URL(`${host}complexSearch`)
  url.searchParams.append('apiKey', 'f5c572f28ae84cf584378e7061eef4a4')
  url.searchParams.append('includeNutrition', 'true')
  url.searchParams.append('query', query)
  url.searchParams.append('offset', `${page}`)

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    }
  });

  if (response.status === 200) {
    return response.json()
  } else {
    console.log('error')

  }

}

export async function getRecipe(id: number) {

  let url = new URL(`${host}/${id}/information`)
  url.searchParams.append('apiKey', 'f5c572f28ae84cf584378e7061eef4a4')
  url.searchParams.append('includeNutrition', 'true')


  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    }
  });

  if (response.status === 200) {
    return response.json()
  } else {
    console.log('error')
  }

}


const likesUrl = (id: number) => {

  let url = new URL(`${host}/${id}/information`)
  url.searchParams.append('apiKey', 'f5c572f28ae84cf584378e7061eef4a4')
  url.searchParams.append('includeNutrition', 'true')
  return url
}

export async function getLikedCards(likes: Array<number>): Promise<any> {

  const likesIds = [...likes]

  const arrayFetchLikes = likesIds.map(id => fetch(likesUrl(id), {
    method: "GET",
    headers: {
      "content-type": "application/json",
    }
  }).then((response) => { return response.json() }))


  return Promise.all(arrayFetchLikes)
    .then((responses) => {
      console.log('responses',responses)
      return responses
     })
    .catch(error => {
      console.error(error)
    })


}