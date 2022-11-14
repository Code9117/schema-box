import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const SchemaProdiver = (props) => {
  const { defaultValues, children } = props;

  const hookForm = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
  });

  return (
    <FormProvider {...hookForm}>{children}</FormProvider>
  )
};

export default SchemaProdiver