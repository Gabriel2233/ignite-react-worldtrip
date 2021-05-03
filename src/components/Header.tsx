import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type HeaderProps = {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Flex w='100vw' align="center" mx="auto" p={6}>
      {children}
    </Flex>
  )
}
