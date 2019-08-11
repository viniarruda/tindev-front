import { useState } from 'react';
import { useStateValue } from '../../index';
import { loadDevelopers } from '../../../sdk/matchProvider';
import { listDeveloper } from '../actions';

const useDevelopers = () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);

    const response = await loadDevelopers(auth.user.id);

    if (response) {
      dispatch(listDeveloper(response));
    } else {
      dispatch(listDeveloper(response.error));
    }
    setIsLoading(false);
  };

  return [isLoading, request];
};

export default useDevelopers;
