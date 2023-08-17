import { useState } from 'react'
import { Flex, Button, Heading, Alert, AlertIcon } from '@chakra-ui/react'
import { BiCameraMovie } from 'react-icons/bi'
import Link from 'next/link'

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleLoginClick = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3000)
    }, 2000)
  }

  return (
    <>
      <Flex
        bg="background.gray900"
        align="center"
        justify="space-between"
        padding={6}
      >
        <Link href={'/'}>
          <Flex align="center" justify="start" gap={2}>
            <BiCameraMovie size={40} color="#ffce1f" />
            <Heading color="base.yellow500" as="h1">
              Movie Catalog
            </Heading>
          </Flex>
        </Link>

        <Button
          bg="background.yellow"
          color="base.gray500"
          onClick={handleLoginClick}
          isLoading={isLoading}
          size="lg"
          maxWidth="100px"
          padding="1rem 1.7rem"
          _hover={{
            boxShadow: '0px 0px 30px 0px #ffce1f',
            bg: '#ffce1f',
            letterSpacing: '1px',
            fontWeight: 'bolder',
          }}
        >
          Entrar
        </Button>
      </Flex>

      {showAlert && (
        <Flex
          justify="center"
          alignItems="start"
          position="fixed"
          width="100%"
          marginTop={5}
        >
          <Alert
            status="error"
            background="feedback.danger"
            variant="solid"
            borderRadius="md"
            textAlign="center"
            width="auto"
            p={4}
          >
            <AlertIcon />
            Funcionalidade em desenvolvimento.
          </Alert>
        </Flex>
      )}
    </>
  )
}
