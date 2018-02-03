import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const addService = (appointment) => {
  return (dispatch) => {
    axios.post(`/api/appointments`, { appointment })
      .then(res => {
        dispatch({ type: 'ADD_APPOINTMENT', appointment: res.data, headers: res.headers })
      })
      .catch(err => {
        dispatch(setFlash('Failed to add appointment', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}