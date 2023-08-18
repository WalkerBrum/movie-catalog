import { Button as ChakraButton } from '@chakra-ui/react'

interface IButtonAppProps {
  background: string
  color: string
  isLoading?: boolean
  colorHover?: string
  isDisabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({
  background,
  color,
  isLoading,
  onClick,
  colorHover,
  isDisabled,
  children,
}: IButtonAppProps) => {
  return (
    <ChakraButton
      bg={background}
      color={color}
      padding="1rem 2rem"
      size="lg"
      isLoading={isLoading}
      isDisabled={isDisabled}
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: `0px 0px 30px 0px ${colorHover}`,
        bg: { colorHover },
        fontWeight: 'bolder',
        letterSpacing: '1px',
      }}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  )
}
