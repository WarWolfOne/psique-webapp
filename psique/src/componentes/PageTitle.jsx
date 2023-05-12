import {
    React
}from "react";

export default function PageTitle({title, user}){
    return (
        <div
            style={{
                height: 60,
                paddingInline: 20,
                backgroundColor: "#061A40",
                display: "flex",
                justifyContent: "flex-end",
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
        </div>
    )
};