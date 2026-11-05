import { Header } from './features/aviation/layout/Header'
import { Main } from './features/aviation/pages/Home'
import { Footer } from './features/aviation/layout/Footer'
import { Login } from './features/access/components/Login'
import { Register } from './features/access/components/Register'
import { ForgotPassword } from './features/access/components/ForgotPassword'
import { Props } from './features/aviation/pages/Stories'
import { Api } from './features/aviation/pages/RickAndMorty'

import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'

function AppRoutes() {
    const location = useLocation()

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/props" element={<Props />} />
            <Route path="/api" element={<Api key={location.search} />} />
            <Route
                path="*"
                element={
                    <section className="container py-5 text-center">
                        <p className="text-success-emphasis small fw-semibold">404 / SIN COORDENADAS</p>
                        <h2 className="mb-3">Esta página quedó fuera del mapa.</h2>
                        <Link to="/" className="btn btn-outline-success px-4 py-2">
                            Volver a la base
                        </Link>
                    </section>
                }
            />
        </Routes>
    )
}

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className="d-flex min-vh-100 flex-column bg-warning-subtle text-body">
                <Header />
                <main className="flex-grow-1">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
