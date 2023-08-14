import { Box, Grid, GridItem } from '@chakra-ui/react'

import { MovieCard } from './components/movie-card/MovieCard'
import { SearchMovie } from './components/search-movie/SearchMovie'

export const Main = () => {
  return (
    <Box p={[4, 7, 10]}>
      <SearchMovie />
      <Grid
        templateColumns="repeat(auto-fit, minmax(220px, 1fr))"
        gap={5}
        p={[4, 8, 10]}
      >
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
        <GridItem style={{ justifySelf: 'center', alignSelf: 'center' }}>
          <MovieCard />
        </GridItem>
      </Grid>
    </Box>
  )
}
