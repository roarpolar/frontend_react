import { useState, ChangeEvent, FormEvent } from 'react';
import './UnidadesManutencao.css';

interface FormData {
  nome: string;
  email: string;
  nasc: string;
  natural: string;
  local: string;
  cel: string;
  telefone: string;
  novo: string;
  endereco: string;
  cidade: string;
  restricao: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    nasc: "",
    natural: "",
    local: "",
    cel: "",
    telefone: "",
    novo: "",
    endereco: "",
    cidade: "",
    restricao: "Sim",
  });

  const [equipe, setEquipe] = useState<string[]>([]);
  const [novoMembro, setNovoMembro] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Unidade de Manutenção cadastrada com sucesso!");
  };

  const addMembro = () => {
    if (novoMembro.trim()) {
      setEquipe([...equipe, novoMembro]);
      setNovoMembro("");
    }
  };

  const removeMembro = (index: number) => {
    const newEquipe = equipe.filter((_, i) => i !== index);
    setEquipe(newEquipe);
  };

  return (
    <div className="container">
      <header className="header">
        Cadastro Unidades de Manutenção
      </header>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="nome">Empresa (Gestão responsével do contrato)</label>
              <input id="nome" type="text" value={formData.nome} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="novo">Novo Contrato</label>
              <input id="novo" type="text" value={formData.novo} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="nome">Nome ou Razão Social</label>
              <input id="nome" type="text" value={formData.nome} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="nasc">Data do Novo Contrato</label>
              <input id="nasc" type="date" value={formData.nasc} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="local">Localidade</label>
              <input id="local" type="text" value={formData.local} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="cel">Celular</label>
              <input id="cel" type="text" value={formData.cel} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" type="text" value={formData.telefone} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="endereco">Endereço</label>
              <input id="endereco" type="text" value={formData.endereco} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" type="text" value={formData.cidade} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="restricao">Restricão</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="restricao"
                  value="Sim"
                  checked={formData.restricao === "Sim"}
                  onChange={() => setFormData((prev) => ({ ...prev, restricao: "Sim" }))}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="restricao"
                  value="Não"
                  checked={formData.restricao === "Não"}
                  onChange={() => setFormData((prev) => ({ ...prev, restricao: "Não" }))}
                />
                Não
              </label>
              <label>
                <input
                  type="radio"
                  name="restricao"
                  value="Flexível"
                  checked={formData.restricao === "Flexível"}
                  onChange={() => setFormData((prev) => ({ ...prev, restricao: "Flexível" }))}
                />
                Flexível
              </label>
            </div>
          </div>
          <div className="equipe-residente">
            <hr />
            <h2>Equipe Residente</h2>
            <div className="form-field">
              <input
                type="text"
                placeholder="Adicionar novo membro"
                value={novoMembro}
                onChange={(e) => setNovoMembro(e.target.value)}
              />
              <button type="button" onClick={addMembro} className="add-button">Adicionar</button>
            </div>
            <div className="membros-lista">
              {equipe.map((membro, index) => (
                <span key={index} className="membro-item">
                  {membro} <button type="button" onClick={() => removeMembro(index)}>X</button>
                </span>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
