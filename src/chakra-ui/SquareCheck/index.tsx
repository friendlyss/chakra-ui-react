import React from 'react'
import { Square, Box } from '@chakra-ui/react'
import { SquareProps } from '@chakra-ui/layout'
import { BiCheck, BiWindowClose } from 'react-icons/bi'

interface SquareCheckProps extends SquareProps {
  isChecked?: boolean
}

const SquareCheck: React.FC<SquareCheckProps> = ({ isChecked, ...rest }) => {
  return (
    <Square
      size={10}
      color={isChecked ? 'green.500' : 'red.500'}
      pos='relative'
      transition='color .1s ease-in-out'
      rounded='md'
      {...rest}
    >
      <Box
        transition='all .15s ease-in-out'
        opacity={isChecked ? 1 : 0}
        pos='absolute'
        transform={isChecked ? 'rotate(0deg)' : 'rotate(30deg)'}
      >
        <BiCheck size={20} />
      </Box>
      <Box
        transition='all .15s ease-in-out'
        opacity={isChecked ? 0 : 1}
        pos='absolute'
        transform={isChecked ? 'rotate(180deg)' : 'rotate(0deg)'}
      >
        <BiWindowClose size={20} />
      </Box>
    </Square>
  )
}

export default SquareCheck
