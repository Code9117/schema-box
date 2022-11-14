import React, { useMemo } from 'react';

import { getTemplate } from './getTemplate';
import { getComtainer } from '../helps';

const SchemaContainer = (props) => {
  const { schema, name, ...rest } = props;
  const { type, schemaTemplate, ...otherSchema } = schema || {};

  const ContainerTemplate = useMemo(() => schemaTemplate || getTemplate(type), [type, schemaTemplate]);

  const CommonContainer = useMemo(() => getComtainer(type), [type]);

  return (
    <>
      <ContainerTemplate schema={otherSchema} {...(name ? {name, key: `${name}-field`} :{})}>
        <CommonContainer {...rest} schema={otherSchema} {...(name ? {name, key: `${name}-field`} :{})} />
      </ContainerTemplate>
    </>
  )

};

export default SchemaContainer;