import { Flex, Card, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'

import { TmdbApi } from '@/services/api'

interface IListGenres {
  id: number
  name: string
}

interface IMovieCardProps {
  title: string
  imgUrl: string
  genreIds: number[]
  voteAverage: number
}

export const MovieCard = ({
  title,
  imgUrl,
  genreIds,
  voteAverage,
}: IMovieCardProps) => {
  const [listGenres, setListGenres] = useState<IListGenres[]>([])
  const [genres, setGenres] = useState<IListGenres[]>([])

  const mapGenreIdsToNames = useCallback(
    (genreIds: number[]): IListGenres[] => {
      const mappedGenres = genreIds.map((id) => {
        const matchedGenre = listGenres.find((genre) => genre.id === id)
        return matchedGenre || null
      })

      return mappedGenres.filter(
        (genre, index) => genre !== null && index < 2,
      ) as IListGenres[]
    },
    [listGenres],
  )

  useEffect(() => {
    const keyApi = `${process.env.NEXT_PUBLIC_API_KEY}`

    TmdbApi.getListGenres(keyApi).then(({ data }) => {
      setListGenres(data.genres)
      const validGenres = mapGenreIdsToNames(genreIds)

      setGenres(validGenres)
    })
  }, [genreIds, mapGenreIdsToNames])

  return (
    <Card
      bgImage={`url(https://image.tmdb.org/t/p/w500${imgUrl})`}
      bgSize="cover"
      bgPosition="center"
      borderRadius="lg"
      w="220px"
      h="300px"
      justify="end"
      color="base.gray100"
      cursor="pointer"
      p={5}
      sx={{ justifySelf: 'center', alignSelf: 'center' }}
      _hover={{ filter: 'brightness(50%)' }}
    >
      <Flex
        direction="column"
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h3"
          fontSize={17}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          height={55}
          sx={{
            textShadow: '0px 0px 40px #1281c3',
          }}
        >
          {title}
        </Heading>

        <Text fontWeight="bold" color="#DAA520">
          Nota: {voteAverage}
        </Text>

        <Flex gap={3}>
          {genres.map((genre) => (
            <Text
              fontWeight="bold"
              key={genre.id}
              as="span"
              bg="blue"
              p={1}
              borderRadius={5}
              fontSize={12}
            >
              {genre.name}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Card>
  )
}
