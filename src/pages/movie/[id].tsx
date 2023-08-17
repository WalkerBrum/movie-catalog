import { MoviesContext } from '@/context/MoviesContext'
import { DetailMovie } from '@/modules/movie/DetailMovie'
import Head from 'next/head'
import { useContext } from 'react'

export default function Movie() {
  const { infoMovies } = useContext(MoviesContext)
  return (
    <>
      <DetailMovie />
    </>
  )
}
