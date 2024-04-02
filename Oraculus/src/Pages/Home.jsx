import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useHoroscope } from "../Components/Datas";
import { useEffect, useState } from "react";


function Home() {
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
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 37) {
                handleLeftClick();
            } else if (e.keyCode === 39) {
                handleRightClick();
            }
        };
    
        // Ajout d'un gestionnaire d'événements pour les touches pressées
        window.addEventListener('keyup', handleKeyDown);
    
        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('keyup', handleKeyDown);
        };
    }, [handleLeftClick, handleRightClick]); // Spécifiez les dépendances pour contrôler quand useEffect doit être exécuté
    
    return (
        <>
        <Header />
        <main>
            <section>
                <div>
                    <Link className="left-horoscope" to="/" onClick={handleLeftClick}>{horoscope[currentIndex > 0 ? currentIndex - 1 : horoscope.length -1].signe}<span>{horoscope[currentIndex >0 ? currentIndex - 1 : horoscope.length -1].date}</span></Link>
                    <Link className="right-horoscope" to="/" onClick={handleRightClick}>{horoscope[currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0].signe} <span>{horoscope[currentIndex < horoscope.length - 1 ? currentIndex + 1 : 0].date}</span></Link>
                </div>

                <article>
                    <p id="datejour">-- HOROSCOPE DU {new Date().toLocaleDateString()}</p>
                    <h1>{horoscope[currentIndex].signe}</h1>
                    <span id="date">{horoscope[currentIndex].date}</span>
                    <div>
                        <p id="amour"><span>Amour : {horoscope[currentIndex].amour}</span></p>
                        <p id="travail"><span>Travail : {horoscope[currentIndex].travail}</span></p>
                        <p id="argent"><span>Argent : {horoscope[currentIndex].argent}</span></p>
                        <p id="sante"><span>Santé : {horoscope[currentIndex].sante}</span></p>
                        <p id="famille"><span>Famille et amis : {horoscope[currentIndex].famille}</span></p>
                        <p id="conseil"><span>Conseil : {horoscope[currentIndex].conseil}</span></p> 
                    </div>
                </article>

            </section>
            <aside>
                <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe}/>
            </aside>
        </main>
        
        </>
    )
}

export default Home;