import React, { useState } from "react";
import "../index.css";
import "../css/Perfil.css";
import Label from "../componentes/Label";
import Input from "../componentes/Input";
import InputTypeB from "../componentes/InputTypeB";
import InputTypeC from "../componentes/InputTypeC";
import PageTitle from "../componentes/PageTitle";
import Button from "../componentes/Button";

import Profile from "../assets/user.png";
import Edit from "../assets/edit-pink.svg";

function Perfil() {

    const [nome, setNome] = useState(null);
    const [CRP, setCRP] = useState(null);
    const [estadoEmissor, setEstadoEmissor] = useState(null);
    const [eMail, setEMail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [especialidade, setEspecialidade] = useState(null);
    const [abordagem, setAbordagem] = useState(null);

    return (
        <div className="container">
            <PageTitle
                pageTitle="Perfil"
            />
            <img
                src={Profile}
                className="Perfil"
            />

            <div className="Btn-Outline">
                <button className="OutLine">Editar</button>
                <img
                    src={Edit}
                    className="Icon"
                />
            </div>

            <div className="Form">
                <Label
                    labelTitle="Nome"
                />
                <Input
                    value={nome}
                    placeholder="Nome"
                />

                <div className="Row">
                    <div className="Box">
                        <Label
                            labelTitle="CRP"
                        />
                        <InputTypeB
                            value={CRP}
                            placeholder="CRP"
                        />
                    </div>

                    <div className="Box">
                        <Label
                            labelTitle="Estado Emissor"
                        />
                        <InputTypeB
                            value={estadoEmissor}
                            placeholder="Estado Emissor"
                        />
                    </div>
                </div>

                <Label
                    labelTitle="E-Mail"
                />
                <Input
                    value={eMail}
                    placeholder="E-Mail"
                />

                <Label
                    labelTitle="Celular"
                />
                <Input
                    value={telefone}
                    placeholder="Celular"
                />

                <Label
                    labelTitle="Descrição"
                />
                <InputTypeC
                    value={descricao}
                    placeholder="Descrição"
                />

                <Label
                    labelTitle="Especialidade"
                />
                <Input
                    value={especialidade}
                    placeholder="Especialidade"
                />

                <Label
                    labelTitle="Abordagem"
                />
                <Input
                    value={abordagem}
                    placeholder="Abordagem"
                />
                <div className="BoxEnd">
                    <Button
                        title="Salvar"
                    />
                </div>
            </div>
        </div>
    );
}
export default Perfil;