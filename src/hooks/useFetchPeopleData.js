import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThunk } from '../reducers/people';

export default function useFetchPeopleData() {
  const dispatch = useDispatch();
  const { people, pending, error } = useSelector((state) => ({ people: state.people.data, pending: state.people.pending, error: state.people.error }));

  useEffect(() => {
    if (!people && !pending && !error) {
      dispatch(fetchThunk());
    }
  }, [people, pending, error, dispatch]);

  return { people, pending };
}
