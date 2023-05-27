import React from "react";
import styles from "./Card.module.css";

export default function Card({ userName, dataAtendimento, horaAtendimento, userDescription, buttonTitle, onClick }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div>
                    <div
                        style={{
                            background: "#ECECEC",
                            width: 80,
                            height: 80,
                            margin: 20
                        }}
                    >
                        Perfil
                    </div>
                </div>
                <div>
                    <p className={styles.title}>{userName}</p>
                    <div className={styles.infos}>
                        <p className={styles.title}>Data: </p>
                        <p className={styles.titleInfos}>{dataAtendimento}</p>
                        <p className={styles.title}>Hora: </p>
                        <p className={styles.titleInfos}>{horaAtendimento}</p>
                    </div>
                    <p className={styles.title}>Informações do Perfil:</p>
                    <p className={styles.userProfile}>{userDescription}</p>
                </div>
            </div>
            <button className={styles.button}>
                {buttonTitle}
            </button>
        </div>
    )
};