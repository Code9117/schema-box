import React from 'react';

import { Box } from '@mui/material';

const DefaultTemplate = (props) => {
  const { schema, children, ...rest } = props;
  const { title, style = {}, useInjectProps } = schema || {};

  const injectProps = useInjectProps?.(props) || {};

  return (
    <Box {...rest} {...style} {...injectProps}>
      {
        title && <Box sx={{fontSize: '2rem'}}>{title}</Box>
      }
      {children}
    </Box>
  )
};

export default DefaultTemplate