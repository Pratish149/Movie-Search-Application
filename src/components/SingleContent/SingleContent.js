import { Badge } from '@material-ui/core'
import { img_300, unavailable } from '../../config/config'
import ContentModal from '../ContentModal/ContentModal';
import './SingleContent.css'

function SingleContent({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average.toFixed(1)} color={vote_average > 6 ? 'primary' : 'secondary'} />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className='title'>{title}</b>
            <div className='subTitle'>
                <span>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
                <span>{date}</span>
            </div>
        </ContentModal>
    )
}

export default SingleContent;