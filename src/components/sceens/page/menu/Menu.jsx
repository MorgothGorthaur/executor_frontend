import React, {useEffect, useState} from 'react'
import styles from './Menu.module.css'
import ScenarioService from "../../../service/scenario/ScenarioService.js"
import PaginationControls from "../../../templates/PaginationControls/PaginationControls.jsx"
import Input from "../../../templates/input/Input.jsx"

const Menu = () => {
    const [searchType, setSearchType] = useState('name')
    const [searchText, setSearchText] = useState('')
    const [scenarios, setScenarios] = useState([])
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
                return await ScenarioService.findAll(currentPage, pageSize)
            } else if (searchType === 'name') {
                return await ScenarioService.findByName(searchText, currentPage, pageSize)
            } else if (searchType === 'site') {
                return await ScenarioService.findBySite(searchText, currentPage, pageSize)
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
            </div>
        </div>
    );
};


export default Menu
