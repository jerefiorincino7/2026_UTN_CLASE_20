import { useEffect, useState } from "react"


function usePosts() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function consultarAlServidor() {
        const respuesta_http = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: "GET"
            }
        )
        const resultado = await respuesta_http.json()
        setIsLoading(false)
        setResponse(resultado)
    }

    useEffect(
        () => {
            consultarAlServidor()
        },
        []
    )

    return {
        response: response,
        error: error,
        isLoading: isLoading
    }
}

export default usePosts