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
import { CircularIconWithProgressBar } from './components/circular-progress/CircularIconWithProgressBar'

export const DetailMovie = () => {
  const { query } = useRouter()
  const { infoMovies, mapGenreIdsToNames } = useContext(MoviesContext)

  const queryId =
    typeof query.id === 'string' ? parseInt(query.id, 10) : undefined

  const infoMovie = infoMovies.find((infoMovie) => infoMovie.id === queryId)
  const progressValue = infoMovie?.vote_average
    ? infoMovie.vote_average * 10
    : 0

  return (
    <Flex p="5">
      <Flex
        wrap="nowrap"
        justifyContent="space-between"
        alignItems="center"
        w="30%"
      >
        <Card
          bgImage={`url(https://image.tmdb.org/t/p/w500/${infoMovie?.poster_path})`}
          fontWeight="bold"
          borderRadius="lg"
          w={400}
          h={400}
          p={5}
          m={2}
          bgSize="cover"
          bgPosition="center"
          as="span"
        ></Card>
      </Flex>

      <Flex direction="column" color="white" alignItems="center" w="70%" p={5}>
        <Heading fontWeight="bold" as="h1" textAlign="center" m={2}>
          {infoMovie?.title}
        </Heading>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          p={5}
        >
          <CircularIconWithProgressBar progress={progressValue} />
          <AiOutlineHeart />
          <BsFillBookmarkFill></BsFillBookmarkFill>
          <AiFillStar></AiFillStar>
          <Text fontWeight="bolder" color="base.yellow500" fontSize={18}>
            {infoMovie?.release_date}
          </Text>
        </Flex>

        <Flex
          p={2}
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          border="2px solid white"
          borderRadius="lg"
        >
          <Text fontWeight="bolder" color="base.yellow500" fontSize={18}>
            Conteúdo adulto:{' '}
            <Text
              as="span"
              color="base.gray100"
              fontWeight="bold"
              fontSize={16}
            >
              {infoMovie?.adult ? 'Sim' : 'Não'}
            </Text>
          </Text>
          <Flex justify="center" gap={5} alignItems="center">
            <Text fontWeight="bolder" color="base.yellow500" fontSize={18}>
              Gênero:
            </Text>
            {infoMovie?.genre_ids &&
              mapGenreIdsToNames(infoMovie?.genre_ids).map((genre) => (
                <Text
                  alignSelf="flex-start"
                  fontWeight="bold"
                  as="span"
                  key={genre.id}
                  bg={`geners.${genre.id}`}
                  p={2}
                  borderRadius={5}
                  fontSize={16}
                  color="base.gray100"
                >
                  {genre.name}
                </Text>
              ))}
          </Flex>
        </Flex>

        <Flex margin="20px 0">
          <Text fontWeight="bolder" color="base.yellow500" fontSize={18} p={3}>
            Sinopse:
          </Text>
          <Text
            fontWeight="bold"
            p={3}
            fontSize={16}
            maxW={700}
            color="base.gray100"
          >
            {infoMovie?.overview}
          </Text>
        </Flex>

        <Text
          p={2}
          alignSelf="flex-start"
          fontWeight="bolder"
          color="base.yellow500"
          fontSize={18}
        >
          Título original:{' '}
          <Text as="span" fontWeight="bold" color="base.gray100" fontSize={16}>
            {infoMovie?.original_title}
          </Text>
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
          <Text
            p={2}
            alignSelf="flex-start"
            fontWeight="bolder"
            color="base.yellow500"
            fontSize={18}
          >
            Popularidade:{' '}
            <Text
              fontWeight="bold"
              fontSize={16}
              color="base.gray100"
              as="span"
            >
              {infoMovie?.popularity}
            </Text>
          </Text>
          <Text
            p={2}
            alignSelf="flex-start"
            fontWeight="bolder"
            color="base.yellow500"
            fontSize={18}
          >
            Votos:{' '}
            <Text
              fontWeight="bold"
              fontSize={16}
              color="base.gray100"
              as="span"
            >
              {infoMovie?.vote_average}
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
