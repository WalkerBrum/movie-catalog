import { Flex, Box } from '@chakra-ui/react'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

export const Footer = () => {
  return (
    <Box fontSize={25}>
      <Flex
        bg="background.gray900"
        align="center"
        justify="space-between"
        p={5}
        color="background.blue500"
      >
        <Box
          as="a"
          href="https://github.com/WalkerBrum"
          title="Github Profile"
          target="_blank"
          transition={'all ease-in-out 600ms'}
          _hover={{
            color: 'background.blue300',
            boxShadow: '0px 0px 20px 0px #32a2f5',
            transition: 'all ease-in-out 600ms',
          }}
        >
          <AiFillGithub />
        </Box>
        <Box
          as="a"
          href="https://www.linkedin.com/in/walkerlobato/"
          title="Linkedin Profile"
          target="_blank"
          rel="noopener noreferrer"
          transition={'all ease-in-out 600ms'}
          _hover={{
            color: 'background.blue300',
            boxShadow: '0px 0px 20px 0px #32a2f5',
            transition: 'all ease-in-out 600ms',
          }}
        >
          <AiFillLinkedin />
        </Box>
        <Box
          as="a"
          href="https://www.facebook.com/walker.brum"
          title="FaceBook Profile"
          transition={'all ease-in-out 600ms'}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{
            color: 'background.blue300',
            boxShadow: '0px 0px 20px 0px #32a2f5',
            transition: 'all ease-in-out 600ms',
          }}
        >
          <AiFillFacebook />
        </Box>
        <Box
          as="a"
          href="https://www.instagram.com/brumwalker"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          transition={'all ease-in-out 600ms'}
          _hover={{
            color: 'background.blue300',
            boxShadow: '0px 0px 20px 0px #32a2f5',
            transition: 'all ease-in-out 600ms',
          }}
        >
          <AiFillInstagram />
        </Box>
      </Flex>
    </Box>
  )
}
