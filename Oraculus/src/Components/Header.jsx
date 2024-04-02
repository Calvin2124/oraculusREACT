import { Link } from "react-router-dom";
import logo from "../assets/logo-oraculus.png"
import "../Styles/Header.css"
import { useHoroscope } from "../Components/Datas";

function Header() {
    const {horoscope, currentIndex, setCurrentIndex} = useHoroscope()
    const handleRightClick = () => {
        if (currentIndex == horoscope.length - 1){
            setCurrentIndex(prevIndex => prevIndex = 0)
        }else {
        setCurrentIndex(prevIndex => prevIndex + 1)
        }
        return
    }
    const handleLeftClick = () => {
        if (currentIndex <= 0){
            setCurrentIndex(prevIndex => prevIndex = horoscope.length -1)
        }else {
        setCurrentIndex(prevIndex => prevIndex - 1)
        }
        return
    }
    
    return (
        <>
            <header>
                <Link to="/"><img src={logo} alt="Logo Oraculus"/></Link>
                <nav>
                    <ul>
                        <li><Link className="active" to="/">Horoscope</Link></li>
                        <li><Link to="/">A propos</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>

                <div className="arrow">
                    <Link className="arrow-left" to="/" onClick={handleLeftClick}><i className="fa-solid fa-chevron-left"/></Link>
                    <Link className="arrow-right" to="/" onClick={handleRightClick}><i className="fa-solid fa-chevron-right"/></Link>
                </div>
            </header>
        </>
    )
}

export default Header;