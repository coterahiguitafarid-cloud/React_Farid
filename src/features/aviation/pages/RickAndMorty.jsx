import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const API_URL = 'https://rickandmortyapi.com/api/character'

const STATUS_STYLES = {
    Alive: 'text-bg-success',
    Dead: 'text-bg-danger',
    unknown: 'text-bg-secondary',
}

const getPageNumbers = (current, total) => {
    const pages = []
    for (let page = 1; page <= total; page += 1) {
        if (page === 1 || page === total || (page >= current - 1 && page <= current + 1)) {
            pages.push(page)
        } else if (pages[pages.length - 1] !== '...') {
            pages.push('...')
        }
    }
    return pages
}

export const Api = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const search = searchParams.get('q') ?? ''

    const pageNumbers = useMemo(() => getPageNumbers(page, totalPages), [page, totalPages])

    useEffect(() => {
        const controller = new AbortController()
        const timer = window.setTimeout(async () => {
            setLoading(true)
            setError('')

            try {
                const params = new URLSearchParams({ page: String(page) })
                if (search.trim()) params.set('name', search.trim())

                const response = await fetch(`${API_URL}?${params}`, {
                    signal: controller.signal,
                })

                if (response.status === 404) {
                    setCharacters([])
                    setTotalPages(1)
                    return
                }
                if (!response.ok) {
                    throw new Error('No se pudo cargar la información de la API.')
                }

                const data = await response.json()
                setCharacters(data.results)
                setTotalPages(data.info.pages)
            } catch (requestError) {
                if (requestError.name !== 'AbortError') {
                    setError(requestError.message || 'Ocurrió un error al cargar los personajes.')
                }
            } finally {
                if (!controller.signal.aborted) setLoading(false)
            }
        }, 350)

        return () => {
            window.clearTimeout(timer)
            controller.abort()
        }
    }, [page, search])

    const updateSearch = (value) => {
        setSearchParams(value ? { q: value } : {})
        setPage(1)
    }

    const goToPage = (nextPage) => {
        if (nextPage < 1 || nextPage > totalPages || nextPage === page) return
        setPage(nextPage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section className="container py-5">
            <header className="mb-4">
                <p className="small text-uppercase text-success-emphasis fw-semibold mb-2">Archivo de personajes</p>
                <h1 className="h2 mb-2">Rick y Morty</h1>
                <p className="text-body-secondary mb-0">
                    Busca personajes y explora los resultados de la API.
                </p>
            </header>

            <div className="row mb-4">
                <div className="col-12 col-md-8 col-lg-6">
                    <label className="form-label" htmlFor="character-search">Buscar por nombre</label>
                    <input
                        id="character-search"
                        type="search"
                        className="form-control"
                        placeholder="Ej.: Rick, Morty..."
                        value={search}
                        onChange={(event) => updateSearch(event.target.value)}
                    />
                </div>
            </div>

            {loading && (
                <div className="d-flex justify-content-center py-5" role="status" aria-live="polite">
                    <div className="spinner-border text-success">
                        <span className="visually-hidden">Cargando personajes...</span>
                    </div>
                </div>
            )}

            {error && <div className="alert alert-danger" role="alert">{error}</div>}

            {!loading && !error && characters.length === 0 && (
                <div className="alert alert-secondary" role="status">
                    No se encontraron personajes con ese nombre.
                </div>
            )}

            {!loading && !error && characters.length > 0 && (
                <>
                    <div className="row g-4">
                        {characters.map((character) => (
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={character.id}>
                                <article className="card h-100 shadow-sm">
                                    <img
                                        src={character.image}
                                        className="card-img-top"
                                        alt={character.name}
                                        loading="lazy"
                                    />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                                            <h2 className="h5 card-title mb-0">{character.name}</h2>
                                            <span className={`badge ${STATUS_STYLES[character.status] ?? 'text-bg-secondary'}`}>
                                                {character.status}
                                            </span>
                                        </div>
                                        <p className="card-text text-body-secondary small mb-0">
                                            {character.species} · {character.gender}
                                        </p>
                                        <p className="card-text small mt-2 mb-0">
                                            Última ubicación: {character.location.name}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <nav className="mt-4" aria-label="Paginación de personajes">
                            <ul className="pagination justify-content-center flex-wrap">
                                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                                    <button
                                        type="button"
                                        className="page-link"
                                        onClick={() => goToPage(page - 1)}
                                        disabled={page === 1}
                                    >
                                        Anterior
                                    </button>
                                </li>
                                {pageNumbers.map((pageNumber, index) => (
                                    <li
                                        className={`page-item ${pageNumber === page ? 'active' : ''} ${pageNumber === '...' ? 'disabled' : ''}`}
                                        key={`${pageNumber}-${index}`}
                                    >
                                        {pageNumber === '...' ? (
                                            <span className="page-link">…</span>
                                        ) : (
                                            <button
                                                type="button"
                                                className="page-link"
                                                onClick={() => goToPage(pageNumber)}
                                                aria-current={pageNumber === page ? 'page' : undefined}
                                            >
                                                {pageNumber}
                                            </button>
                                        )}
                                    </li>
                                ))}
                                <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                                    <button
                                        type="button"
                                        className="page-link"
                                        onClick={() => goToPage(page + 1)}
                                        disabled={page === totalPages}
                                    >
                                        Siguiente
                                    </button>
                                </li>
                            </ul>
                            <p className="small text-body-secondary text-center mb-0">
                                Página {page} de {totalPages}
                            </p>
                        </nav>
                    )}
                </>
            )}
        </section>
    )
}
