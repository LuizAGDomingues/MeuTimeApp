import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3'
})