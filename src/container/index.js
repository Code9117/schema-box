import React from 'react';

import SchemaProdiver from './SchemaProvider';
import SchemaContainer from './SchemaContainer';

const SchemaBox = (props) => {
  const { defaultValues, schema, children } = props;
  
  return (
    <>
      <SchemaProdiver defaultValues={defaultValues}>
        <SchemaContainer schema={schema} />
        {children}
      </SchemaProdiver>
    </>
  )
};

export default SchemaBox;