import { createContext, ReactNode, useState, useEffect } from 'react'

import { TmdbApi } from '@/services/api'
import { IGenre, IInfoMovies } from '@/services/api.types'

interface IMoviesContextType {
  infoMovies: IInfoMovies[]
  page: number
  searchMovie: string
  beforePage: () => void
  nextPage: () => void
  getSearchMovie: (search: string) => void
  mapGenreIdsToNames: (genreIds: number[]) => IGenre[]
}

export const MoviesContext = createContext({} as IMoviesContextType)

interface IMoviesContextProviderProps {
  children: ReactNode
}

export const MoviesContextProvider = ({
  children,
}: IMoviesContextProviderProps) => {
  const [infoMovies, setInfoMovies] = useState<IInfoMovies[]>([])
  const [listGenres, setListGenres] = useState<IGenre[]>([])
  const [page, setPage] = useState(1)
  const [searchMovie, setSearchMovie] = useState('')

  TmdbApi.getListGenres()
    .then(({ data }) => {
      setListGenres(data.genres)
    })
    .catch((error) => {
      console.log(error)
    })

  useEffect(() => {
    if (searchMovie === '') {
      TmdbApi.getPopularMovies(page)
        .then(({ data }) => {
          setInfoMovies(data.results)
        })
        .catch((error) => {
          console.log(error)
        })

      return
    }

    TmdbApi.filterMovie(searchMovie)
      .then(({ data }) => {
        if (data.results) setInfoMovies(data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [page, searchMovie])

  const mapGenreIdsToNames = (genreIds: number[]): IGenre[] => {
    const mappedGenres = genreIds.map((id) => {
      const matchedGenre = listGenres.find((genre) => genre.id === id)
      return matchedGenre || null
    })

    return mappedGenres.filter(
      (genre, index) => genre !== null && index < 2,
    ) as IGenre[]
  }

  const beforePage = () => {
    setPage((prevState) => prevState - 1)
    window.scrollTo(0, 0)
  }

  const nextPage = () => {
    setPage((prevState) => prevState + 1)
    window.scrollTo(0, 0)
  }

  const getSearchMovie = (search: string) => {
    setSearchMovie(search)
  }

  return (
    <MoviesContext.Provider
      value={{
        infoMovies,
        page,
        beforePage,
        nextPage,
        mapGenreIdsToNames,
        getSearchMovie,
        searchMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
