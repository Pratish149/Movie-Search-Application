import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

function Genres({
    type,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    setPage
}) {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)
    }

    const handleDelete = (genre) => {
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id))
        setGenres([...genres, genre])
        setPage(1)
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=033f874c1d083b7205fde0c0bb83e3ef&language=en-US`
        )

        setGenres(data.genres)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres([])
        }

        // eslint-disable-next-line
    }, [])

    return (
        <div style={{ marginBottom: '20px' }}>
            {
                selectedGenres && selectedGenres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{ margin: '4px', fontWeight: 'bold', border: '2px solid black' }}
                        key={genre.id}
                        color='primary'
                        onDelete={() => handleDelete(genre)}
                        clickable
                    />
                ))
            }
            {
                genres && genres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{ margin: '4px', fontWeight: 'bold', border: '2px solid black' }}
                        key={genre.id}
                        onClick={() => handleAdd(genre)}
                        clickable
                    />
                ))
            }
        </div>
    )
}

export default Genres;