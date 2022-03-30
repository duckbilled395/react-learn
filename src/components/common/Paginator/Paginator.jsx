import React, {useState} from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    // let zxc = () => { setPortionNumber(portionNumber + 1) }
    // let cxz = () => { setPortionNumber(portionNumber - 1) }
console.log(portionNumber)
    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                return <span
                    className={currentPage === page
                        ? styles.selectedPage
                        : styles.page}
                    onClick={(e) => {onPageChanged(page)}}
                    key={page}>{page}
                </span>
            })}
            {portionCount > portionNumber &&
            <button onClick={ () => { setPortionNumber(portionNumber + 1) } }>Next</button>}
        </div>
    )
}

export default Paginator;