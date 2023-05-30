import React from "react";
import styles from "./PageTitle.module.css"
function PageTitle({pageTitle}) {
    return (
        <div className={styles.Box}>
            <h1 className={styles.Title}>{pageTitle}</h1>
        </div>
    );
}
export default PageTitle;