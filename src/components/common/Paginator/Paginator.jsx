import React, {useState} from "react";
import styles from "./Paginator.module.css";
import {setCurrentPage} from "../../../redux/users-reducer";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10, portionNumberFromState}) => {
    // debugger
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(portionNumberFromState);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button className={styles.button} onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                return <span
                    className={currentPage === page
                        ? styles.selectedPage
                        : styles.page}
                    onClick={(e) => {onPageChanged(page, portionNumber); }}
                    key={page}>{page}
                </span>
            })}
            {portionCount > portionNumber &&
            <button className={styles.button} onClick={ () => { setPortionNumber(portionNumber + 1) } }>Next</button>}
        </div>
    )
}

export default Paginator;