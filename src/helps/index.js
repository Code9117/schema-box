import { isEmpty } from 'lodash';

export const getComtainer = (schema, UIMaps) => {
  const { type } = schema || {};

  if (!type || (!UIMaps || isEmpty(UIMaps))) return null;

  if (typeof type === 'function') return type;

  return UIMaps?.[type] || `error: type is not include, ${type}`;
}