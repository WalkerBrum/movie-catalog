import { MoviesContext } from '@/context/MoviesContext'
import { Flex, Input, Button } from '@chakra-ui/react'
import { ChangeEvent, useContext, useState } from 'react'

export const SearchMovie = () => {
  const [search, setSearch] = useState('')
  const { getSearchMovie } = useContext(MoviesContext)

  const handleSearchMovie = (event: ChangeEvent<HTMLInputElement>) => {
    const eventTagetValue = event.target.value.toLowerCase()
    setSearch(eventTagetValue)
  }

  const searchInfoMovie = () => {
    getSearchMovie(search)
  }

  return (
    <Flex align="center" justify="center" p={[2, 4, 6]}>
      <Input
        placeholder="Digite algo..."
        size="lg"
        mr={2}
        bg="background.white"
        focusBorderColor="background.darkBlue"
        color="base.gray400"
        maxW="800px"
        _placeholder={{ color: 'base.gray300' }}
        onChange={handleSearchMovie}
      />

      <Button
        bg="background.yellow"
        color="base.gray500"
        size="lg"
        maxWidth="100px"
        isDisabled={search.length === 0}
        _hover={{
          boxShadow: '0px 0px 30px 0px #ffce1f',
          bg: '#ffce1f',
          letterSpacing: '1px',
          fontWeight: 'bolder',
        }}
        onClick={searchInfoMovie}
      >
        Buscar
      </Button>
    </Flex>
  )
}
