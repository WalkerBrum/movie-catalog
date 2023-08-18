import { Flex, Box } from '@chakra-ui/react'
import { title } from 'process'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

interface IFooterLinkProps {
  href: string
  title: string
  children: React.ReactNode
}

const FooterLink = ({ href, title, children }: IFooterLinkProps) => {
  return (
    <Box
      as="a"
      href={href}
      title={title}
      color={'background.blue500'}
      target="_blank"
      rel="noopener noreferrer"
      transition={'all ease-in-out 600ms'}
      _hover={{
        color: 'background.blue300',
        boxShadow: '0px 0px 20px 0px #32a2f5',
        transition: 'all ease-in-out 600ms',
      }}
    >
      {children}
    </Box>
  )
}

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
        <FooterLink href="https://github.com/WalkerBrum" title="Github Profile">
          <AiFillGithub />
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/walkerlobato/"
          title="Linkedin Profile"
        >
          <AiFillLinkedin />
        </FooterLink>
        <FooterLink
          href="https://www.facebook.com/walker.brum"
          title="FaceBook Profile"
        >
          <AiFillFacebook />
        </FooterLink>
        <FooterLink
          href="https://www.instagram.com/brumwalker"
          title="Instagram"
        >
          <AiFillInstagram />
        </FooterLink>
      </Flex>
    </Box>
  )
}
