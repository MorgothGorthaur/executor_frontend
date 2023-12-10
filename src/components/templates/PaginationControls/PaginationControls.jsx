import React from 'react'
import styles from './PaginationControls.module.css'

const PaginationControls = ({ currentPage, totalPages, setCurrentPage, pageSize, setPageSize}) => {
    return (
        <div className={styles.pagination_controls}>
            <div className={styles.pagination_info}>
                <button onClick={() => setCurrentPage(1)} disabled={currentPage <= 1}>First</button>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPages}>Next</button>
                <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage >= totalPages}>Last</button>
            </div>
            <div className={styles.pagination_select}>
                <span>Show:</span>
                <select onChange={(e) => setPageSize(e.target.value)} value={pageSize}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    );
};

export default PaginationControls;
