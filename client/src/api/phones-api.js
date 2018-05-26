import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const getPhones = () =>  axios.get('http://localhost:3001/phones').then(res => res.data)

export default instance
