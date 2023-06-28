const url = 'http://www.google.com'

const getGoogleHomePage = async () => {
  try {
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(`RESULT ==> ${jsonData}`)

    return response.statusCode
  } catch (error) {
    console.log(`RESULT ==> ${error}`)
  }
}

console.log(getGoogleHomePage())
