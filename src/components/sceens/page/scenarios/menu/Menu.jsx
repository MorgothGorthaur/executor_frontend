import React, {useEffect, useState} from 'react'
import styles from './Menu.module.css'
import ScenarioService from "../../../../service/scenario/ScenarioService.js"
import PaginationControls from "../../../../templates/PaginationControls/PaginationControls.jsx"
import Input from "../../../../templates/input/Input.jsx"

const Menu = ({setScenarios, setIsFormOpen}) => {
    const [searchType, setSearchType] = useState('name')
    const [searchText, setSearchText] = useState('')
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(totalPages)
    const [pageSize, setPageSize] = useState(10)
    const handleSearchTypeChange = (type) => setSearchType(type)

    useEffect(() => {
        fetchScenarios().then(value => {
            setScenarios(value.content)
            setTotalPages(value.totalPages)
        })
    }, [searchType, searchText, currentPage, pageSize]);


    const handlePageSizeChange = (newPageSize) => {
        setPageSize(parseInt(newPageSize, 10))
        setCurrentPage(1)
    }

    async function fetchScenarios() {
        try {
            if (searchText === '') {
                return await ScenarioService.findAll(currentPage -1, pageSize)
            } else if (searchType === 'name') {
                return await ScenarioService.findByName(searchText, currentPage -1, pageSize)
            } else if (searchType === 'site') {
                return await ScenarioService.findBySite(searchText, currentPage -1, pageSize)
            }
        } catch (error) {
            console.error('Error fetching scenarios:', error);
        }
    }

    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <div>
                    <Input searchText={searchText} setSearchText={setSearchText}/>
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
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                        pageSize={pageSize}
                        setPageSize={handlePageSizeChange}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className={styles.button}
                    >
                        new scenario
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Menu
