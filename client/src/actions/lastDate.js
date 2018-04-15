import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getLastDate = () => {
  return (dispatch) => {
    axios.get('/last_date')
      .then(res => {
        const { data: lastDate, headers } = res;
        dispatch({ type: 'SET_LAST_DATE', lastDate, headers });
      })
      .catch(res => {
        setFlash('Error Loading Appointments', 'red');
        dispatch(setHeaders(res.headers));
      })
  }
}