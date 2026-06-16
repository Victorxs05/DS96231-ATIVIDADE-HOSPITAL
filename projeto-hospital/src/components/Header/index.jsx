import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>Clinica Esporte Vitoria</h1>
                </Link>
            </div>

            <nav>
                <NavLink>
                    <Link to="/">Home</Link>
                </NavLink>
                <NavLink>
                    <Link to="/quemsomos">Quem Somos</Link>
                </NavLink>
                <NavLink>
                    <Link to="/servicos">Serviços</Link>
                </NavLink>
                <NavLink>
                    <Link to="/corpoclinico">Corpo Clinico</Link>
                </NavLink>
                <NavLink>
                    <Link to="/contato">Contato</Link>
                </NavLink>
                <NavLink>
                    <Link to="/blog">Blog</Link>
                </NavLink>
            </nav>
        </header>
    )
}