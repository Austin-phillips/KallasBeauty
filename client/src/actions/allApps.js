import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getAllAppointments = () => {
  return (dispatch) => {
    axios.get('/all_app')
      .then(res => {
        const { data: allApps, headers } = res;
        dispatch({ type: 'SET_ALL_APPOINTMENTS', allApps, headers });
      })
      .catch(res => {
        setFlash('Error Loading Appointments', 'red');
        dispatch(setHeaders(res.headers));
      })
  }
}