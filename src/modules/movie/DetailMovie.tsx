import { Flex, Card, Heading, Text, Box, Center } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

import { MoviesContext } from '@/context/MoviesContext'
import { CircularIconWithProgressBar } from './components/circular-progress/CircularIconWithProgressBar'
import { ButtonApp } from '@/components/Button'
import Link from 'next/link'
import Head from 'next/head'

export const DetailMovie = () => {
  const { query } = useRouter()
  const { infoMovies, mapGenreIdsToNames } = useContext(MoviesContext)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = () => {
    const nextIndex = (currentImageIndex + 1) % imageUrls.length
    setCurrentImageIndex(nextIndex)
  }

  const queryId =
    typeof query.id === 'string' ? parseInt(query.id, 10) : undefined

  const infoMovie = infoMovies.find((infoMovie) => infoMovie.id === queryId)
  const progressValue = infoMovie?.vote_average
    ? infoMovie.vote_average * 10
    : 0

  const imageUrls = [
    `url(https://image.tmdb.org/t/p/w500/${infoMovie?.poster_path})`,
    `url(https://image.tmdb.org/t/p/w500/${infoMovie?.backdrop_path})`,
  ]

  return (
    <>
      <Head>
        <title>{infoMovie?.title}</title>
      </Head>

      <Box position="relative">
        <Flex
          p={[2, 5, 8]}
          wrap="nowrap"
          justifyContent={['center', 'center', 'space-between']}
          alignItems="center"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Flex w={['100%', '70%', '80%', '30%']} justifyContent="center">
            <Card
              bgImage={imageUrls[currentImageIndex]}
              fontWeight="bold"
              borderRadius="lg"
              w={500}
              h={500}
              p={5}
              m={2}
              bgSize="100% 100%"
              bgPosition="center"
              bgRepeat="no-repeat"
              sx={{
                cursor: 'pointer',
                width: '400px',
                height: '400px',
                borderRadius: 'lg',
                perspective: '1000px',
                transition: 'transform 0.5s ease',
                transform: currentImageIndex === 1 ? 'rotateY(360deg)' : 'none',
              }}
              _hover={{ filter: 'brightness(80%)' }}
              onClick={handleImageClick}
            />
          </Flex>

          <Flex
            direction="column"
            color="white"
            alignItems="center"
            w={['100%', '100%', '100%', '70%']}
            p={[1, 3, 5]}
          >
            <Heading fontWeight="bold" as="h1" textAlign="center" m={2}>
              {infoMovie?.title}
            </Heading>

            <Flex
              justifyContent={['center', 'space-between']}
              alignItems="center"
              gap={10}
              width="100%"
              p={5}
            >
              <CircularIconWithProgressBar progress={progressValue} />

              <Text fontWeight="bolder" color="base.yellow500" fontSize={18}>
                Data de lançamento:{' '}
                <Text
                  as="span"
                  fontWeight="bold"
                  color="base.gray100"
                  fontSize={16}
                >
                  {infoMovie?.release_date
                    ? format(new Date(infoMovie.release_date), 'dd/MM/yyyy')
                    : 'Data de lançamento indisponível'}
                </Text>
              </Text>
            </Flex>

            <Flex
              p={4}
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              border="2px solid white"
              borderRadius="lg"
              display={['column', 'flex']}
              gap={3}
            >
              <Text
                fontWeight="bolder"
                color="base.yellow500"
                fontSize={18}
                marginBottom={[4, 0]}
                textAlign="center"
              >
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
              <Flex justify="center" gap={5} align="center">
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
                      bg={`genres.${genre.id}`}
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

            <Flex
              margin="20px 0"
              display={['column', 'column', 'column', 'flex']}
            >
              <Text
                fontWeight="bolder"
                color="base.yellow500"
                fontSize={18}
                p={3}
              >
                Sinopse:
              </Text>
              <Text
                fontWeight="bold"
                p={3}
                fontSize={16}
                maxW={700}
                minHeight={100}
                color="base.gray100"
              >
                {infoMovie?.overview
                  ? infoMovie.overview
                  : `Ainda não temos uma descrição para o filme ${infoMovie?.title}`}
              </Text>
            </Flex>

            <Text
              p={5}
              alignSelf="flex-start"
              fontWeight="bolder"
              color="base.yellow500"
              fontSize={18}
            >
              Título original:{' '}
              <Text
                as="span"
                fontWeight="bold"
                color="base.gray100"
                fontSize={16}
              >
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

        <Link href="/">
          <Center marginBottom={[2, 5, 10]} p={[6, 3, 0]}>
            <ButtonApp
              background="background.yellow"
              color="base.gray500"
              colorHover="#ffce1f"
            >
              Voltar
            </ButtonApp>
          </Center>
        </Link>
      </Box>
    </>
  )
}
