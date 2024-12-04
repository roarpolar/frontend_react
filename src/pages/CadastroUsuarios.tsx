import { useState, ChangeEvent, FormEvent } from 'react';
import './CadastroUsuarios.css';

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nasc: "",
    natural: "",
    cel: "",
    telefone: "",
    endereco: "",
    cidade: "",
    sexo: "Masculino",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Cadastro de usuários enviado com sucesso!");
  };

  return (
    <div className="container">
      <header className="header">
        Cadastro de Usuários
      </header>
      <div className="form-wrapper">
        <form
          onSubmit={handleSubmit}
          className="form"
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="nome">Nome Completo</label>
              <input id="nome" type="text" value={formData.nome} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="nasc">Data de Nascimento</label>
              <input id="nasc" type="date" value={formData.nasc} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="natural">Naturalidade</label>
              <input id="natural" type="text" value={formData.natural} onChange={handleChange} />
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
            <label>Sexo</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="sexo"
                  value="Masculino"
                  checked={formData.sexo === "Masculino"}
                  onChange={() => setFormData((prev) => ({ ...prev, sexo: "Masculino" }))}
                />
                Masculino
              </label>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  value="Feminino"
                  checked={formData.sexo === "Feminino"}
                  onChange={() => setFormData((prev) => ({ ...prev, sexo: "Feminino" }))}
                />
                Feminino
              </label>
              <label>
                <input
                  type="radio"
                  name="sexo"
                  value="Outro"
                  checked={formData.sexo === "Outro"}
                  onChange={() => setFormData((prev) => ({ ...prev, sexo: "Outro" }))}
                />
                Outro
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;


