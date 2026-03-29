import axios from 'axios'

// Cria uma instância do axios com configuração base
// Toda chamada feita com esse client já vai pra api.github.com
const axiosClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
})

export default axiosClient
