import './style.css'

export default function CorpoClinico() {
    const medicos = [
    { id: 1, nome: "Dra. Ana Beatriz Silva", especialidade: "Cardiologia", crm: "CRM/SP 123456" },
    { id: 2, nome: "Dr. Carlos Eduardo Malta", especialidade: "Pediatria", crm: "CRM/SP 654321" },
    { id: 3, nome: "Dra. Juliana Ribeiro", especialidade: "Neurologia", crm: "CRM/SP 789101" },
    { id: 4, nome: "Dr. Ricardo Santos", especialidade: "Ortopedia e Traumatologia", crm: "CRM/SP 112131" },
    { id: 5, nome: "Dra. Mariana Costa", especialidade: "Ginecologia e Obstetrícia", crm: "CRM/SP 415161" },
    { id: 6, nome: "Dr. Fernando Almeida", especialidade: "Clínica Médica", crm: "CRM/SP 171819" }
    ];
    
    return (
        <div className="page-container corpo-clinico-page">
        <h1>Corpo Clínico</h1>
        <p className="subtitle">Conheça nossos especialistas prontos para cuidar de você.</p>
        
        <div className="doctors-grid">
            {medicos.map(medico => (
            <div key={medico.id} className="doctor-card">
                <div className="doctor-avatar">🩺</div>
                <h3>{medico.nome}</h3>
                <p className="specialty">{medico.especialidade}</p>
                <span className="crm">{medico.crm}</span>
            </div>
            ))}
        </div>
        </div>
    );
}