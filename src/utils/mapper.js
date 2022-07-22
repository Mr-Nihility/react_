export const mapper=(films)=>{
    return films.map(({title, poster_path,vote_count,id })=> ({
            title,
            poster_path,
            vote_count,
            watched: false,
            id,
        
    }))

}