import React, { ReactNode } from 'react'
import { Button, Icon, useColorModeValue, IButtonProps } from 'native-base'
import { Feather } from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: boolean
  icon: string
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props}: Props) => {
  const colorScheme = useColorModeValue('blue', 'darkBlue');
  const inactiveTextColor = useColorModeValue('blue.500', undefined)
  const pressedBgColor = useColorModeValue('primary.100', 'primary.600')

  return (
    <Button
      size="lg"
      _light={{
        colorScheme: 'blue',
        _pressed: {
          bg: 'primary.100'
        },
        _text: {
          color: active ? 'blue.50' : 'blue.500'
        }
      }}
      _dark={{
        colorScheme: 'darkBlue',
        _pressed: {
          bg: 'primary.600'
        },
        _text: {
          color: active ? 'blue.50' : undefined
        }
      }}
      bg={active ? undefined : 'transparent'}
      variant="solid"
      justifyContent="flex-start"
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
      {...props}
    >
      {children}
    </Button>
  )

}

export default MenuButton