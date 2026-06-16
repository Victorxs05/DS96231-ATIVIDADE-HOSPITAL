import './style.css'

export default function Contato() {
    return (
        <div className="page-container contato-page">
        <h1>Canais de Contato</h1>
        <p className="subtitle">Entre em contato conosco através dos nossos canais de atendimento:</p>

        <div className="contatos-lista">
            <div className="contato-item">
            <strong>📍 Endereço:</strong> 
            <span>Av. Sete de Setembro, 1234 - Corredor da Vitória, Salvador - BA</span>
            </div>

            <div className="contato-item">
            <strong>📞 Telefone Central:</strong> 
            <span>(71) 4002-8922</span>
            </div>

            <div className="contato-item">
            <strong>🚑 Emergência / Pronto-Socorro:</strong> 
            <span>(71) 1920-0000 (Atendimento 24h)</span>
            </div>

            <div className="contato-item">
            <strong>✉️ E-mail Institucional:</strong> 
            <span>contato@hospitalesportevitoria.com.br</span>
            </div>

            <div className="contato-item">
            <strong>🕒 Horário do Ambulatório:</strong> 
            <span>Segunda a Sexta, das 7h às 19h</span>
            </div>
        </div>
        </div>
    );
}