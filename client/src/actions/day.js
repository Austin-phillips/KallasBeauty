import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const getDays = () => {
  return (dispatch) => {
    axios.get('/api/days')
      .then(res => {
        const { data: day, headers } = res;
        dispatch({ type: 'SET_DAY', day, headers });
      })
      .catch(res => {
        setFlash('Error Loading Times', 'red');
        dispatch(setHeaders(res.headers));
      })
  }
}