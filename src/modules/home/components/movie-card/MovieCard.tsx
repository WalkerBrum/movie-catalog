import { Flex, Card, Heading, Text } from '@chakra-ui/react'

export const MovieCard = () => {
  const cardImage = 'https://source.unsplash.com/random?b=1'

  return (
    <Card
      bgImage={`url(${cardImage})`}
      bgSize="cover"
      bgPosition="center"
      borderRadius="lg"
      w="220px"
      h="300px"
      justify="end"
      color="base.gray100"
      cursor="pointer"
      p={5}
      _hover={{ filter: 'sepia(100%)' }}
    >
      <Flex direction="column" gap={2}>
        <Heading as="h3" size="md" fontWeight="bold">Se Beber Não Case</Heading>
        <Text fontWeight="bold">Comédia</Text>
        <Text fontWeight="bold">1h53min</Text>
      </Flex>
    </Card>
  )
}