import { Box, Button, Grid, Flex } from '@chakra-ui/react'
import { useContext } from 'react'

import { MovieCard } from './components/movie-card/MovieCard'
import { SearchMovie } from './components/search-movie/SearchMovie'
import { MoviesContext } from '@/context/MoviesContext'

export const Main = () => {
  const { infoMovies, page, beforePage, nextPage } = useContext(MoviesContext)

  const isDisabledBeforePage = page < 2

  return (
    <Box p={[4, 7, 10]}>
      <SearchMovie />
      <Grid
        templateColumns="repeat(auto-fit, minmax(220px, 1fr))"
        gap={5}
        p={[4, 8, 10]}
      >
        {infoMovies.map((infoMovie) => (
          <MovieCard
            title={infoMovie.title}
            imgUrl={infoMovie.poster_path}
            genreIds={infoMovie.genre_ids}
            key={infoMovie.id}
            voteAverage={infoMovie.vote_average}
          />
        ))}
      </Grid>

      <Flex align="center" justify="space-between" p={[2, 6, 10]}>
        <Button isDisabled={isDisabledBeforePage} onClick={beforePage}>
          Página anterior
        </Button>

        <Button onClick={nextPage}>Próxima página</Button>
      </Flex>
    </Box>
  )
}
