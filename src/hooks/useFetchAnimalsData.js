import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThunk } from '../reducers/animals';

export default function useFetchAnimalsData() {
  const dispatch = useDispatch();
  const { animals, pending, error } = useSelector((state) => ({ animals: state.animals.data, pending: state.animals.pending, error: state.animals.error }));

  useEffect(() => {
    if (animals.length === 0 && !pending && !error) {
      dispatch(fetchThunk());
    }
  }, [animals, pending, error, dispatch]);

  return { animals, pending };
}
