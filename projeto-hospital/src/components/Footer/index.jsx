import './style.css'

export default function Footer() {
    return(
        <footer>
            <strong>Clinica Esporte Vitoria</strong>
            <p>Copyright &copy;{new Date().getFullYear()} - Todos os direitos reservados</p>
        </footer>
    )
}