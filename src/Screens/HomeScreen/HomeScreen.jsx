import React, { useContext } from 'react'
import { Link } from 'react-router'
import Sidebar from '../../Components/SideBar/SideBar'
import { LangContext, langs_available } from '../../Context/LangContext'
import { ContactContext } from '../../Context/ContactContext'

export default function HomeScreen() {
    const { langSelected, changeLang } = useContext(LangContext)
    const langElements = []
    const {contacts} = useContext(ContactContext)
    console.log("[HomeScreen.jsx]", contacts)
    for (const lang of langs_available) {
        langElements.push(
            <div key={lang.value}>
                <span>{lang.nombre}</span>
                <img src={lang.icon} width={30} />
                {langSelected === lang.value && <span> seleccionado</span>}
                <button onClick={() => changeLang(lang.value)}>Cambiar idioma</button>
            </div>
        )
    }
    return (
        <div>
            <Sidebar />
            {langElements}
        </div>
    )
}
