import './Header.css';
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    return (
        <span onClick={() => window.scroll(0, 0)} className="header">🎬 Entertainment Hub</span>
    )
}

export default Header;