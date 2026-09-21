import React, { useEffect, useState } from 'react'
import usePosts from '../../hooks/usePostsList'

export default function PostsList() {
    const usePostResults = usePosts()


    if (usePostResults.isLoading) {
        return (
            <div>Cargando...</div>
        )
    }

    const lista_posteos_jsx = []
    for (const post of usePostResults.response) {
        lista_posteos_jsx.push(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr />
            </div>
        )
    }
    return (
        <div>
            {lista_posteos_jsx}

        </div>
    )
}
