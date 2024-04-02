import { createContext, useContext, useState } from "react"
import horoscopeData from "../Datas/horoscopes.json"

const HoroscopeContext = createContext()

export function HoroscopeProvider({children}){
    const [horoscope, setHoroscope] = useState(horoscopeData)
    const [currentIndex, setCurrentIndex] = useState(0)

    return <HoroscopeContext.Provider value={{horoscope, currentIndex, setCurrentIndex}}>{children}</HoroscopeContext.Provider>
}
export function useHoroscope(){
    return useContext(HoroscopeContext)
}