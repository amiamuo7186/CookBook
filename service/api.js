export async function loadCard() {
  
    const response= await axios.get('https://dummyjson.com/recipes', {
    headers: {
      'X-Workspace': 'public'
    }
  })
   return response.data


}