const apikey: string = '15bd98f9323c04c7f38a7c08a28d5f13'
export const baseImagPath =  (size:string, path:string)=>{
    return `https://image.tmdb.org/t/p/${size}${path}`
}
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`

export const searchMovies =(keyword:string)=>{
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;

}
export const moviesDetails = (id:number)=>{
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
}
export const movieCastDetails = (id:number)=>{
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`
}