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
import Config from "../assets/config.svg";
import styles from "./SideBar.module.css";

export default function SideBar() {

    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);

    return (
        <div className={styles.container}>
                <img
                    src={Menu}
                    alt="Menu"
                    className={styles.menu}
                />

            <div
                className={styles.itens}
            >
                <a>
                    <img
                        src={Agendamentos}
                        alt="Proximos Agendamentos"
                        className={styles.icon}
                    />
                </a>

                <a>
                    <img
                        src={Historico}
                        alt="Historico de Atendimento"
                        className={styles.icon}
                    />
                </a>

                <a>
                    <img
                        src={Pacientes}
                        alt="Pacientes"
                        className={styles.iconPacientes}
                    />
                </a>

                <a>
                    <img
                        src={Atendimentos}
                        alt="Configurar meus horarios"
                        className={styles.icon}
                    />
                </a>
            </div>

            <div className={styles.config}>
                <img
                    src={Config}
                    alt="Configurações"
                    className={styles.icon}
                />
            </div>

        </div>
    )
};