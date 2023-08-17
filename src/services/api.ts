import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

const perPage = 100

export const TmdbApi = {
  getPopularMovies: (page: number, keyApi: string) => {
    return axios.get(
      `/discover/movie?sort_by=popularity.desc&page=${page}&per_page=${perPage}&api_key=${keyApi}&language=pt-BR`,
    )
  },
  getListGenres: (keyApi: string) => {
    return axios.get(`genre/movie/list?api_key=${keyApi}&language=pt-BR`)
  },
  filterMovie: (keyApi: string, search: string) => {
    return axios.get(`search/movie?api_key=${keyApi}&query=${search}`)
  },
}
