import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const search = query.trim()
        if (!search) return
        navigate(`/api?q=${encodeURIComponent(search)}`)
        setQuery('')
    }

    return (
        <form className="input-group input-group-sm" role="search" onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="aircraft-site-search">Buscar personajes</label>
            <input
                id="aircraft-site-search"
                type="search"
                className="form-control"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar personaje..."
            />
            <button className="btn btn-outline-success" type="submit" aria-label="Buscar">Buscar</button>
        </form>
    )
}
