import React, { Children, cloneElement } from 'react';

import { Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const CommonTemplate = (props) => {
  const { name, schema, children, ...rest } = props;

  const {
    title,
    titleStyle = {},
    useCustomeHook,
    useInjectProps,
  } = schema || {};

  const { control } = useFormContext();

  useCustomeHook?.(props);
  const injectProps = useInjectProps?.(props) || {};

  return (
    <Box>
      {
        title && <Box {...titleStyle}>{title}</Box>
      }
      {children && Children.only(children) ? cloneElement(children, {
        ...(children?.props || {}),
        ...rest,
        ...injectProps,
        key: `${name}-children`,
        control
      }) : null}
    </Box>
  )
};

export default CommonTemplate;