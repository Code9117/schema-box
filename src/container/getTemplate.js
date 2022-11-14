import ObjectTemplate from "./ObjectTemplate";
import CommonTemplate from "./CommonTemplate";
import DefaultTemplate from './DefaultTemplate';

export const getTemplate = (type) => {
  const template = {
    'object': ObjectTemplate
  }[type] || ((['input', 'date', 'checkbox'].includes(type)) && CommonTemplate) || DefaultTemplate;

  return template;
}