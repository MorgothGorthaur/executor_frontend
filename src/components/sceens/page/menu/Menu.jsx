// Menu.jsx
import React, {useEffect, useState} from 'react';
import styles from './Menu.module.css';
import ScenarioService from "../../../service/scenario/ScenarioService.js";

const Menu = () => {
    const [searchType, setSearchType] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [scenarios, setScenarios] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handleSearchTypeChange = (type) => {
        setSearchType(type);
    };

    useEffect(() => {
        fetchScenarios().then(value => {
            setScenarios(value.content)
            setTotalPages(value.totalPages)
        } )
    }, [searchType, searchText]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    async function fetchScenarios() {
        try {
            if (searchText === '') {
                return await ScenarioService.findAll({pageNum: 1, pageSize: 10});
            } else if (searchType === 'name') {
                return await ScenarioService.findByName(searchText, {pageNum: 1, pageSize: 10});
            } else if (searchType === 'site') {
                return await ScenarioService.findBySite(searchText, {pageNum: 1, pageSize: 10});
            }
        } catch (error) {
            console.error('Error fetching scenarios:', error);
        }
    }

    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        onClick={() => handleSearchTypeChange('name')}
                        className={`${styles.button} ${searchType === 'name' ? styles.selectedButton : ''}`}
                    >
                        Search by Name
                    </button>
                    <button
                        onClick={() => handleSearchTypeChange('site')}
                        className={`${styles.button} ${searchType === 'site' ? styles.selectedButton : ''}`}
                    >
                        Search by Site
                    </button>
                </div>
                <div>
                    <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
                </div>
            </div>
        </div>
    );
};


export default Menu;
