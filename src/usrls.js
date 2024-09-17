import { API_KEY,baseUrl } from "./constants/constants"
export const Banner = `${baseUrl}/trending/movie/week?api_key=${API_KEY}`;

export const orginals = `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanticMovies = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const ComedyMovies =  `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const sciFi = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=878`;
export const fantasy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=14`;
export const animation = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=16`;
export const documentary = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const thriller = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=53`;




