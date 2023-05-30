import {
    React
} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Profile from "../assets/profile.png"

export default function Header({ title, user }) {
    return (
        <div
            className={styles.container}
        >
            <h1
                className={styles.title}
            >
                {title}
            </h1>
            <Link to="/perfil">
                <img
                    src={Profile}
                    className={styles.profile}
                />
                {/* <img
                    src={Profile}
                    className={styles.profile}
                /> */}
            </Link>
        </div>
    )
};