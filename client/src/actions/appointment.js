import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getAppointments = () => {
  return (dispatch) => {
    axios.get('/api/appointments')
      .then(res => {
        const { data: appointments, headers } = res;
        dispatch({ type: 'SET_APPOINTMENTS', appointments, headers });
      })
      .catch(res => {
        setFlash('Error Loading Projects', 'red');
        dispatch(setHeaders(res.headers));
      })
  }
}

export const addAppointment = (appointment) => {
  return (dispatch) => {
    axios.post(`/api/appointments`, { appointment })
      .then(res => {
        dispatch({ type: 'ADD_APPOINTMENT', appointment: res.data, headers: res.headers })
        dispatch(setFlash('Appointment Successfully Added', 'green'))
      })
      .catch(err => {
        dispatch(setFlash('Failed to add appointment', 'red'))
        dispatch(setHeaders(err.headers))
      })
  }
}