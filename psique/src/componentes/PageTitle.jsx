import {
    React
} from "react";

export default function PageTitle({ title, user }) {
    return (
        <div
            style={{
                height: 60,
                paddingInline: 20,
                backgroundColor: "#061A40",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            <h1
                style={{
                    fontFamily: "roboto",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#FFFFFF"
                }}
            >
                {title}
            </h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                <div
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: "#FEFEFE",
                        borderRadius: 25
                    }}
                >

                </div>
            </div>
        </div>
    )
};