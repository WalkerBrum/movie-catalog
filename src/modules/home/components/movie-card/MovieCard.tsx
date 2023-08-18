import { Flex, Card, Heading, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import Link from 'next/link'

import { MoviesContext } from '@/context/MoviesContext'

interface IMovieCardProps {
  title: string
  imgUrl: string
  genreIds: number[]
  voteAverage: number
  id: number
}

export const MovieCard = ({
  title,
  imgUrl,
  genreIds,
  voteAverage,
  id,
}: IMovieCardProps) => {
  const { mapGenreIdsToNames } = useContext(MoviesContext)

  return (
    <Link href={`/movie/${id}`}>
      <Card
        bgImage={`url(https://image.tmdb.org/t/p/w500${imgUrl})`}
        bgSize="cover"
        bgPosition="center"
        borderRadius="lg"
        w={[280, 240, 220, 240, 220]}
        h={[360, 320, 300, 320, 300]}
        gap={5}
        justify="end"
        color="base.gray100"
        cursor="pointer"
        p={5}
        sx={{ justifySelf: 'center', alignSelf: 'center' }}
        _hover={{ filter: 'sepia(100%)' }}
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
            {genreIds &&
              mapGenreIdsToNames(genreIds)?.map((genre) => (
                <Text
                  fontWeight="bold"
                  key={genre.id}
                  as="span"
                  bg={`genres.${genre.id}`}
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
    </Link>
  )
}
