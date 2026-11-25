export async function loadCard() {
  
    const response= await axios.get('https://dummyjson.com/recipes', {
    headers: {
      'X-Workspace': 'public'
    }
  })
   return response.data
}
export async function ajouter (plat) {
 

const options = {
  method: 'POST',
  url: 'https://dummyjson.com/recipes/add',
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data: plat
}

try {
  const { data } = await axios.request(options)
 return(data)
} catch (error) {
  console.error(error)
}
}
export async function Delete(id){
      return await axios.delete('https://dummyjson.com/recipes/remove'+id)
  

}