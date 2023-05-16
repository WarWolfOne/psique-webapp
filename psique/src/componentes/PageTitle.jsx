import {
    React
} from "react";
import styles from "./PageTitle.module.css";

import Profile from "../assets/profile.png"

export default function PageTitle({ title, user }) {
    return (
        <div
            className={styles.container}
        >
            <h1
                className={styles.title}
            >
                {title}
            </h1>
            <div>
                <img
                    src={Profile}
                    className={styles.profile}
                />
                {/* <img
                    src={Profile}
                    className={styles.profile}
                /> */}
            </div>
        </div>
    )
};