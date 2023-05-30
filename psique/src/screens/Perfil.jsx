import React from "react";
import "../index.css";
import "../css/Perfil.css";
import Label from "../componentes/Label";
import Input from "../componentes/Input";
import InputTypeB from "../componentes/InputTypeB";
import PageTitle from "../componentes/PageTitle";

import Profile from "../assets/profile.png"

function Perfil() {
    return (
        <div className="container">
            <PageTitle
                pageTitle="Perfil"
            />
                <img
                    src={Profile}
                    className="Perfil"
                />
            <div className="Form">
                <Label
                    labelTitle="Nome"
                />
                <Input />

                <div className="Row">
                    <div className="Box">
                        <Label
                            labelTitle="CRP"
                        />
                        <InputTypeB />
                    </div>

                    <div className="Box">
                        <Label
                            labelTitle="Estado Emissor"
                        />
                        <InputTypeB />
                    </div>
                </div>

                <Label
                    labelTitle="E-Mail"
                />
                <Input />

                <Label
                    labelTitle="Celular"
                />
                <Input />

                <Label
                    labelTitle="Descrição"
                />
                <Input />

                <Label
                    labelTitle="Especialidade"
                />
                <Input />

                <Label
                    labelTitle="Abordagem"
                />
                <Input />
            </div>
        </div>
    );
}
export default Perfil;