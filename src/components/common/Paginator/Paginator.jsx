import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            {pages.map(page => {
                return <span
                    className={currentPage === page
                        ? styles.selectedPage
                        : styles.page}
                    onClick={(e) => {onPageChanged(page)}}
                    key={page}>{page}
                </span>
            })}
        </div>
    )
}

export default Paginator;