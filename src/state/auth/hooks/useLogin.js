import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';
import { createDeveloper } from '../../../sdk/matchProvider';

const useProducts = () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const formData = async ({ values }) => {
    setIsLoading(true);

    const response = await createDeveloper(values.username);

    if (values.username !== '' && response.id) {
      dispatch(login(response));
      localStorage.setItem('user', JSON.stringify(response));
    } else {
      setError(response.error);
    }

    setIsLoading(false);
  };

  return [auth, formData, isLoading, error];
};

export default useProducts;
