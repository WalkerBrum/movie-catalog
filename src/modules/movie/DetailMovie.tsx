import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

import { CircularIconWithProgressBar } from './components/circular-progress/CircularIconWithProgressBar'
import { Button } from '@/components/Button'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { IMovieDetailsInfo } from '@/services/api.types'
import { TmdbApi } from '@/services/api'

export const DetailMovie = () => {
  const { query } = useRouter()
  const [movieDetailsInfo, setMovieDetailsInfo] = useState<IMovieDetailsInfo>()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const queryId =
    typeof query.id === 'string' ? parseInt(query.id, 10) : undefined

  if (typeof queryId === 'number') {
    TmdbApi.getMovie(queryId).then(({ data }) => setMovieDetailsInfo(data))
  }

  const handleImageClick = () => {
    const nextIndex = (currentImageIndex + 1) % imageUrls.length
    setCurrentImageIndex(nextIndex)
  }

  const progressValue = movieDetailsInfo?.vote_average
    ? movieDetailsInfo.vote_average * 10
    : 0

  const imageUrls = [
    `https://image.tmdb.org/t/p/w500/${movieDetailsInfo?.poster_path}`,
    `https://image.tmdb.org/t/p/w500/${movieDetailsInfo?.backdrop_path}`,
  ]

  const hours =
    movieDetailsInfo?.runtime && Math.floor(movieDetailsInfo.runtime / 60)
  const minutes = movieDetailsInfo?.runtime && movieDetailsInfo.runtime % 60

  const formattedTime = `${hours}h ${minutes}m`

  return (
    <>
      <Head>
        <title>{movieDetailsInfo?.title}</title>
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
            <Image
              src={imageUrls[currentImageIndex]}
              title={`Imagens do filme ${movieDetailsInfo?.title}`}
              alt={`Imagens do filme ${movieDetailsInfo?.title}`}
              width={500}
              height={500}
              style={{
                cursor: 'pointer',
                width: '400px',
                height: '400px',
                borderRadius: '16px',
                perspective: '1000px',
                transition: 'transform 0.5s ease',
                transform: currentImageIndex === 1 ? 'rotateY(360deg)' : 'none',
                filter: isHovered ? 'brightness(70%)' : 'none',
              }}
              onClick={handleImageClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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
              {movieDetailsInfo?.title}
            </Heading>

            <Flex
              justifyContent={['center', 'space-between']}
              alignItems="center"
              gap={10}
              width="100%"
              p={5}
            >
              <CircularIconWithProgressBar
                progress={Math.floor(progressValue)}
              />

              <Text fontWeight="bolder" color="base.yellow500" fontSize={18}>
                Data de lançamento:{' '}
                <Text
                  as="span"
                  fontWeight="bold"
                  color="base.gray100"
                  fontSize={16}
                >
                  {movieDetailsInfo?.release_date
                    ? format(
                        new Date(movieDetailsInfo.release_date),
                        'dd/MM/yyyy',
                      )
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
                Duração:{' '}
                <Text
                  as="span"
                  color="base.gray100"
                  fontWeight="bold"
                  fontSize={16}
                >
                  {formattedTime}
                </Text>
              </Text>
              <Flex justify="center" gap={5} align="center">
                <Text fontWeight="bolder" color="base.yellow500" fontSize={18}>
                  Gênero:
                </Text>
                {movieDetailsInfo?.genres.map((genre, index) => {
                  if (index < 2) {
                    return (
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
                    )
                  }
                  return null
                })}
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
                {movieDetailsInfo?.overview
                  ? movieDetailsInfo.overview
                  : `Ainda não temos uma descrição para o filme ${movieDetailsInfo?.title}`}
              </Text>
            </Flex>

            <Text
              p={5}
              alignSelf="flex-start"
              fontWeight="bolder"
              color="base.yellow500"
              fontSize={18}
            >
              Produzido Por:{' '}
              <Text
                as="span"
                fontWeight="bold"
                color="base.gray100"
                fontSize={16}
              >
                {movieDetailsInfo?.production_companies.map(
                  (company) => company.name,
                )}
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
                  {movieDetailsInfo?.popularity}
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
                  {movieDetailsInfo?.vote_average}
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Link href="/">
          <Box marginBottom={[2, 5, 10]} p={[6, 3, 0]} margin="0 2rem">
            <Button
              background="background.yellow"
              color="base.gray500"
              colorHover="#ffce1f"
            >
              Voltar
            </Button>
          </Box>
        </Link>
      </Box>
    </>
  )
}
