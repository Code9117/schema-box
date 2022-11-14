import React from 'react';

import { isEmpty } from 'lodash';

import SchemaContainer from './index';

const ObjectTemplate = (props) => {
  const { schema, name } = props;
  const { properties } = schema || {};

  if (!properties || isEmpty(properties)) return null;

  return Object.keys(properties).map((key) => {
    const propertiesSchema = properties[key];
    const nameField = name ? `${name}.${key}` : key;
    return (
      <SchemaContainer key={nameField} schema={propertiesSchema} name={nameField} />
    )
  })
};

export default ObjectTemplate