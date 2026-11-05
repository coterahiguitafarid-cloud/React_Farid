import { Link } from 'react-router-dom'
import { aircraft } from '../data/aircraft'

const mainImage = `${import.meta.env.BASE_URL}imagenes/principal.jpg`

export const Main = () => (
    <>
        <section className="bg-success-subtle py-5">
            <div className="container py-lg-4">
                <div className="row align-items-center g-4 g-lg-5">
                    <div className="col-12 col-lg-5">
                        <p className="text-success-emphasis text-uppercase fw-semibold small mb-2">
                            Archivo de aviación · Edición 07
                        </p>
                        <h1 className="display-4 fw-semibold mb-3">
                            Máquinas hechas para volar alto.
                        </h1>
                        <p className="text-body-secondary mb-4">
                            Un recorrido por los aviones militares que marcaron la historia,
                            sus diseños y las ideas de ingeniería detrás de cada uno.
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                            <Link to="/api" className="btn btn-success">Explorar la API</Link>
                            <Link to="/props" className="btn btn-outline-success">Ver Props</Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className="ratio ratio-16x9">
                            <img
                                src={mainImage}
                                alt="Aeronave militar sobrevolando una zona montañosa"
                                className="img-fluid rounded border object-fit-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container py-4">
            <div className="row g-3 text-center">
                <div className="col-12 col-md-4">
                    <div className="p-3 border rounded bg-body-tertiary h-100">
                        <strong className="h4 text-success-emphasis d-block mb-1">08</strong>
                        <span className="small text-body-secondary">Aeronaves en el archivo</span>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="p-3 border rounded bg-body-tertiary h-100">
                        <strong className="h4 text-success-emphasis d-block mb-1">06</strong>
                        <span className="small text-body-secondary">Décadas de innovación</span>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="p-3 border rounded bg-body-tertiary h-100">
                        <strong className="h4 text-success-emphasis d-block mb-1">04</strong>
                        <span className="small text-body-secondary">Países representados</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="container py-4 py-lg-5">
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
                <div>
                    <p className="small text-success-emphasis text-uppercase fw-semibold mb-1">Selección de la redacción</p>
                    <h2 className="h2 mb-0">Aeronaves destacadas</h2>
                </div>
                <Link to="/props" className="link-success">Más sobre aviación</Link>
            </div>
            <div className="row g-4">
                {aircraft.map((plane) => (
                    <div className="col-12 col-md-6 col-lg-4" key={plane.id}>
                        <article className="card h-100 shadow-sm">
                            <div className="ratio ratio-16x9">
                                <img
                                    src={plane.image}
                                    alt={`${plane.name}, aeronave de ${plane.country}`}
                                    className="img-fluid object-fit-cover"
                                />
                            </div>
                            <div className="card-body">
                                <p className="small text-success-emphasis mb-2">{plane.country} · {plane.era}</p>
                                <h3 className="h5">{plane.name}</h3>
                                <p className="card-text text-body-secondary small">{plane.summary}</p>
                                <span className="badge text-bg-secondary">{plane.category}</span>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    </>
)
