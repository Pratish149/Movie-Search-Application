import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css'

function Trending() {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=033f874c1d083b7205fde0c0bb83e3ef&page=${page}`

        );

        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending();
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
            <CustomPagination setPage={setPage} numOfPages={20} />
        </div>
    )
}

export default Trending;