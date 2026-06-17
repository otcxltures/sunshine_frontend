import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://your-render-backend-url.com',
  headers: {
    'Content-Type': 'application/json'
  }
})


api.interceptors.request.use(config => {
  const token = localStorage.getItem('ss_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api