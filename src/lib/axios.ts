import axios from 'axios'

export const api = axios.create({
  // Change this if application will be in Production //
  baseURL: 'http://localhost:3334',
})
