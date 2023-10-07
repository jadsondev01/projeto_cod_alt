import React, { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Formulario.css';

const Formulario = () => {
    const times = ['Volante.', 'Goleiro.', 'Atacante.', 'Meio de campo', 'Gandula.', 'Massagista.'];
    const [modoNoturno, setModoNoturno] = useState(false);
    const [campos, setCampos] = useState({
        nome: '',
        cargo: '',
        imagem: null,
        time: ''
    });

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log('Arquivo selecionado:', file);
        setCampos({ ...campos, imagem: file });
    }

    const toggleModo = () => {
        setModoNoturno(!modoNoturno);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (campos.nome && campos.cargo && campos.imagem && campos.time) {
            console.log('Formulário enviado com sucesso:', campos);
        } else {
            console.error('Preencha todos os campos obrigatórios.');
        }
    }

    return (
        <section className={`formulario ${modoNoturno ? 'modo-noturno' : ''}`}>
            <button className="toggle-modo" onClick={toggleModo}>
                <FontAwesomeIcon icon={modoNoturno ? faSun : faMoon} />
            </button>
            <form onSubmit={handleSubmit}>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    onChange={(e) => setCampos({ ...campos, nome: e.target.value })}
                    value={campos.nome}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    onChange={(e) => setCampos({ ...campos, cargo: e.target.value })}
                    value={campos.cargo}
                />
                <div className="upload-wrapper">
                    <label htmlFor="imagem">Anexar Video </label>
                    <input type="file" id="imagem" accept="image/*" onChange={handleFileUpload} />
                </div>
                <ListaSuspensa
                    itens={times}
                    onChange={(e) => setCampos({ ...campos, time: e.target.value })}
                    value={campos.time}
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Formulario;
