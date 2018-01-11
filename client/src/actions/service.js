import axios from 'axios';
import { setFlash } from './flash';

const setServices = (services) => {
  return { type: 'GET_SERVICES', services }
}

export const getServices = () => {
  return dispatch => {
    axios.get('/api/services')
    .then( res => {
      dispatch(setServices(res.data))
    })
    .catch( err => {
      dispatch(setFlash('Error loading services, please try again.', 'red'))
    })
  }
}