import { createContext, useState } from "react";
import contact_list_server from "../Data/contact-data-mook";
import { Outlet } from "react-router";

export const ContactContext = createContext()

export function ContactContextProvider(){
    const [contacts, setContacts] = useState(contact_list_server)
    const contact_values = {
        contacts: contacts,
        setContacts: setContacts
    }
    return(
        <ContactContext.Provider
            value={contact_values}
        >
            <Outlet />
        </ContactContext.Provider>
    )
}