
import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchThunk } from '../reducers/kennels';

export default function useFetchKennelData() {
  const dispatch = useDispatch();
  const { kennels, pending, error } = useSelector((state) => ({ kennels: state.kennels, pending: state.pending, error: state.error }), shallowEqual);

  useEffect(() => {
    if (!kennels && !pending && !error) {
      dispatch(fetchThunk());
    }
  }, [kennels, pending, error, dispatch]);

  return { kennels, pending };
}
