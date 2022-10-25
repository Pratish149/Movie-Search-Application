import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";

function Movies() {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=033f874c1d083b7205fde0c0bb83e3ef&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        )

        setContent(data.results)
        setNumOfPages(data.total_pages > 500 ? 500 : data.total_pages)
    }

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL])

    return (
        <div>
            <span className="pageTitle">Latest Movies</span>
            <Genres
                type='movie'
                genres={genres}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title}
                            date={c.release_date}
                            media_type={'Movie'}
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movies;