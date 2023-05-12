import React from "react";

export default function Card({ userName, dataAtendimento, horaAtendimento, userDescription, buttonTitle, onPress }) {
    return (
        <div
            style={{
                height: "100%",
                // margin: 40,
                padding: 20,
                marginTop: 40,
                marginInline: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "2px 2px 5px 3px rgba(0,0,0,0.2)",
                borderRadius: 8,
            }}
        >
            <div style={{ display: "flex", flexDirection: "row" }}>
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
                    <div>
                        <div>
                            <a>{userName}</a>
                        </div>
                        <div>
                            <p>{dataAtendimento}</p>
                            <p>{horaAtendimento}</p>
                        </div>
                    </div>
                    <p>Informações do Perfil:</p>
                    <p>{userDescription}</p>
                </div>
            </div>
            <button
                style={{
                    color: "#FFFFFF",
                    fontFamily: "roboto",
                    fontWeight: "bold",
                    fontSize: 18,
                    height: 40,
                    paddingInline: 20,
                    borderRadius: 20,
                    backgroundColor: "#061a40"
                }}
            >
                {buttonTitle}
            </button>
        </div>
    )
};