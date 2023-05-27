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
            {/* <img
                    src={Menu}
                    alt="Menu"
                    className={styles.menu}
                /> */}

            <div
                className={styles.itens}
            >
                <Link 
                    to="/" 
                    className={styles.select}
                >
                    <img
                        src={Agendamentos}
                        alt="Proximos Agendamentos"
                        className={styles.icon}
                    />
                    <text className={styles.title}>Próximos Atendimentos</text>
                </Link>

                <Link 
                    to="/historico" 
                    className={styles.select}
                >
                    <img
                        src={Historico}
                        alt="Historico de Atendimento"
                        className={styles.icon}
                    />
                    <text className={styles.title}>Histórico</text>
                </Link>

                <Link 
                    to="/pacientes" 
                    className={styles.select}
                >
                    <img
                        src={Pacientes}
                        alt="Pacientes"
                        className={styles.icon}
                    />
                    <text className={styles.title}>Pacientes</text>
                </Link>

                <Link 
                    to="/meus-horarios" 
                    className={styles.select}
                >
                    <img
                        src={Atendimentos}
                        alt="Configurar meus horarios"
                        className={styles.icon}
                    />
                    <text className={styles.title}>Meus Horários</text>
                </Link>
            </div>

            <div className={styles.config}>
                <Link 
                    to="/configuracoes" 
                    className={styles.select}
                >
                    <img
                        src={Config}
                        alt="Configurações"
                        className={styles.icon}
                    />
                    <text className={styles.title}>Configurações</text>
                </Link>
            </div>

        </div>
    )
};