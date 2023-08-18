import { Button } from '@/components/Button'
import { MoviesContext } from '@/context/MoviesContext'
import { Flex, Input } from '@chakra-ui/react'
import { ChangeEvent, useContext, useState } from 'react'

export const SearchMovie = () => {
  const [search, setSearch] = useState('')
  const { getSearchMovie } = useContext(MoviesContext)

  const handleSearchMovie = (event: ChangeEvent<HTMLInputElement>) => {
    const eventTargetValue = event.target.value.toLowerCase()
    setSearch(eventTargetValue)
  }

  const searchInfoMovie = () => {
    getSearchMovie(search)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchInfoMovie()
    }
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
        onKeyPress={handleKeyPress}
      />

      <Button
        background="background.yellow"
        color="base.gray500"
        colorHover="#ffce1f"
        isDisabled={search.length < 3}
        onClick={searchInfoMovie}
      >
        Buscar
      </Button>
    </Flex>
  )
}
