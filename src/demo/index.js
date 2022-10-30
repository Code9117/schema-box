import React, { memo } from 'react';

import SchemaBox from '../container';

const DemoApp = () => {

  const demoName = {
    type: 'input',
    name: 'demoName',
    title: '实例数据'
  };

  const schema = {
    type: '',
    properties: {
      demoName
    }
  };
  
  return <SchemaBox schema={schema} />
};

export default memo(DemoApp)