import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getAllTimes = () => {
  return (dispatch) => {
    axios.get('/api/days/1/time_slots')
      .then(res => {
        const { data: time, headers } = res;
        dispatch({ type: 'SET_TIME', time, headers });
      })
      .catch(res => {
        setFlash('Error Loading Times', 'red');
        dispatch(setHeaders(res.headers));
      })
  }
}