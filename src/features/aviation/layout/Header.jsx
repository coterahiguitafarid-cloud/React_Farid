import { NavLink } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'
import { ThemeToggle } from '../components/ThemeToggle'

const links = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/props', label: 'Props' },
    { to: '/api', label: 'API' },
]

export const Header = () => (
    <header className="sticky-top border-bottom bg-body-tertiary">
        <nav className="navbar navbar-expand-lg py-2">
            <div className="container">
                <NavLink to="/" className="navbar-brand fw-semibold text-success-emphasis">
                    ALA SIETE <span className="small text-body-secondary">/ ARCHIVO AERONÁUTICO</span>
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aviationNavigation"
                    aria-controls="aviationNavigation"
                    aria-expanded="false"
                    aria-label="Mostrar navegación"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="aviationNavigation">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                        {links.map(({ to, label, end }) => (
                            <li className="nav-item" key={to}>
                                <NavLink
                                    to={to}
                                    end={end}
                                    className={({ isActive }) =>
                                        `nav-link${isActive ? ' active fw-semibold text-success-emphasis' : ''}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="nav-item px-lg-2"><SearchBar /></li>
                        <li className="nav-item"><ThemeToggle /></li>
                        <li className="nav-item">
                            <NavLink to="/login" className="btn btn-success btn-sm px-3 ms-lg-2">Acceso</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)
