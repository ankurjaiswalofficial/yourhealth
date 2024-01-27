import * as React from 'react'

import { Button, ButtonGroup } from '@chakra-ui/react';

function Button(color="red", text, leftIcon=null, rightIcon=null, ) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Button leftIcon={leftIcon} rightIcon={rightIcon} colorScheme={color}>{text}</Button>
  )
}
