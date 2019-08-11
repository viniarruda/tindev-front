import React from 'react';
import { Formik } from 'formik';
import Button from '../../../components/buttons/button';
import FormGroup from '../../../components/form/formGroup';
import Input from '../../../components/form/input';
import ErrorText from '../../../components/form/error';

const LoginForm = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Formik initialValues={{ username: '', password: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <FormGroup>
        {errors.genericError && <ErrorText>{errors.genericError}</ErrorText>}
        <Input
          name="username"
          id="username"
          placeholder="Write your github username"
          onChange={handleChange('username')}
          onBlur={handleBlur('username')}
          error={errors.username}
          value={values.username}
        />
        <Button primary large onClick={handleSubmit} type="submit">
          Login
        </Button>
      </FormGroup>
    )}
  </Formik>
);

export default LoginForm;
