export const fetchFAQData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
      console.error(`Failed to fetch data. Status: ${response.status}`)
      throw new Error(`Failed to fetch data. Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching and parsing data:', error)
    throw new Error('Failed to fetch FAQ data')
  }
}
