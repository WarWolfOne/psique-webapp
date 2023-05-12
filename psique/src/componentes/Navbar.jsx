import {
    React,
    useState,
} from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.svg";
import Agendamentos from "../assets/agendamento.svg";
import Historico from "../assets/historico.svg";
import Pacientes from "../assets/pacientes.svg";
import Atendimentos from "../assets/atendimentos.svg";
import Config from "../assets/config.svg"

export default function Navbar() {

    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);

    return (
        <div
            style={{
                height: "100vh",
                minWidth: "5%",
                paddingInline: 20,
                background: "#061a40",
            }}
        >
            <div className="Menu">
                <img
                    src={Menu}
                    alt="Menu"
                    style={{
                        height: 25,
                        margin: 10

                    }}
                />
            </div>

            <div
                className="Itens"
                style={{
                    marginTop: 60,
                    marginBottom: 60,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <a>
                    <img
                        src={Agendamentos}
                        alt="Proximos Agendamentos"
                        style={{ height: 50 , margin: 30}}
                    />
                </a>

                <a>
                    <img
                        src={Historico}
                        alt="Historico de Atendimento"
                        style={{ height: 50 , margin: 30}}
                    />
                </a>

                <a>
                    <img
                        src={Pacientes}
                        alt="Pacientes"
                        style={{ height: 40 , margin: 30}}
                    />
                </a>

                <a>
                    <img
                        src={Atendimentos}
                        alt="Configurar meus horarios"
                        style={{ height: 50 , margin: 30}}
                    />
                </a>
            </div>

            <div className="Config"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <img
                    src={Config}
                    alt="Configurações"
                    style={{ height: 50 , margin: 30}}
                />
            </div>

        </div>
    )
};