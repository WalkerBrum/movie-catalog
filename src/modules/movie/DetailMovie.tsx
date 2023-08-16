import { Flex, Card, Heading, Text, CircularProgress } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
  AiOutlineOrderedList,
} from 'react-icons/ai'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { MoviesContext } from '@/context/MoviesContext'

export const DetailMovie = () => {
  const { query } = useRouter()
  const { infoMovies } = useContext(MoviesContext)

  const queryId =
    typeof query.id === 'string' ? parseInt(query.id, 10) : undefined

  const filteredMovie = infoMovies.find((infoMovie) => infoMovie.id === queryId)

  console.log(filteredMovie)

  return (
    <Flex p="5">
      <Flex
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
        w="30%"
      >
        <Card
          bgImage={`url(https://image.tmdb.org/t/p/w500/lwyleO7PqNNkX66stvANWP01p9I.jpg)`}
          fontWeight="bold"
          borderRadius="lg"
          w="220px"
          p={5}
          m={2}
          h="300px"
          bgSize="cover"
          bgPosition="center"
          as="span"
        ></Card>

        <Card
          bgImage={`url(https://image.tmdb.org/t/p/w500/lwyleO7PqNNkX66stvANWP01p9I.jpg)`}
          fontWeight="bold"
          borderRadius="lg"
          w="220px"
          p={5}
          m={2}
          h="300px"
          bgSize="cover"
          bgPosition="center"
          as="span"
        ></Card>
      </Flex>

      <Flex direction="column" color="white" alignItems="center" w="70%" p={5}>
        <Heading fontWeight="bold" as="h1" textAlign="center" m={2}>
          Red: Crescer é Uma Fera
        </Heading>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          p={5}
        >
          <CircularProgress />
          <AiOutlineHeart />
          <BsFillBookmarkFill></BsFillBookmarkFill>
          <AiFillStar></AiFillStar>
          <Text>Data de Lançamento:2022-03-10</Text>
        </Flex>

        <Flex
          p={2}
          justifyContent="space-between"
          w="100%"
          border="2px solid white"
          borderRadius="lg"
        >
          <Text alignSelf="flex-start" fontWeight="bold" as="span">
            Conteúdo adulto: Não
          </Text>
          <Text alignSelf="flex-start" fontWeight="bold" as="span">
            Gênero: Comédia, Terror
          </Text>
        </Flex>

        <Flex>
          <Text fontWeight="bold" as="span" p="5">
            Descrição:
          </Text>
          <Text fontWeight="normal" as="span" p="5" maxW="800px">
            Mei, de treze anos, está experimentando a estranheza de ser uma
            adolescente com uma reviravolta – quando ela fica muito animada, ela
            se transforma em um panda vermelho gigante.
          </Text>
        </Flex>

        <Text p={2} alignSelf="flex-start" fontWeight="bold" as="span">
          Título original: Turning Red
        </Text>

        <Flex
          justifyContent="space-between"
          w="100%"
          p={1}
          alignSelf="flex-start"
          fontWeight="bold"
          as="span"
          border="2px solid white"
          borderRadius="lg"
        >
          <Text p={2} alignSelf="flex-start" fontWeight="bold" as="span">
            Popularidade: 147.462
          </Text>
          <Text p={2} alignSelf="flex-start" fontWeight="bold" as="span">
            Votos: 7.4
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
