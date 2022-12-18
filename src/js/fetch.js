import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '13476cf9a62e839f8cae631c41f2ea5e';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = '';
    this.lang = '';
  }
  // Запрос популярных фильмов на главную страницу
  async fetchPopularMovie() {
    try {
      const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  // Запрос детальной информации по id для модалки
  async getFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
