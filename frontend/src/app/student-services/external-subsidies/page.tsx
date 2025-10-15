"use client";
import { useState } from 'react'
import styles from './externalSubsidies.module.css'
import { externalGrants } from '@/data/externalGrants'
import { ExternalGrantKeyword } from '@/lib/types';
import FrostedCard from '@/components/ui/FrostedCard/FrostedCard'
import { Search, SlidersHorizontal } from 'lucide-react'

export default function ExternalSubsidies({

} : {

}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedKeyword, setSelectedKeyword] = useState<ExternalGrantKeyword | 'All'>('All')

    // Define keyword filter options
    const keywords: Array<ExternalGrantKeyword | 'All'> = [
        'All',
        '#Sustainability',
        '#Initiatives',
        '#WomenInSTEM',
        '#2SLGBTQIA+',
        '#Community',
        '#Research',
        '#BIPOC',
        '#Indigenous'
    ]

    // Filter grants based on search and keyword
    const filteredGrants = externalGrants.filter(grant => {
        const matchesKeyword = selectedKeyword === 'All' || grant.keywords.includes(selectedKeyword)
        
        // Search across title, granter, and contact
        const searchLower = searchTerm.toLowerCase()
        const matchesSearch = searchTerm === '' || 
            grant.title.toLowerCase().includes(searchLower) ||
            grant.granter.toLowerCase().includes(searchLower) ||
            grant.contact?.toLowerCase().includes(searchLower)
        
        return matchesKeyword && matchesSearch
    })

    const handleSearch = () => {
        console.log('Searching for:', searchTerm, 'Keyword:', selectedKeyword)
    }

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedKeyword('All')
    }

    // Helper function to render BlurbItem with proper formatting
    const renderBlurb = (items: Array<string | { bullets: string[] }>) => {
        return items.map((item, idx) => {
            if (typeof item === 'string') {
                return <p key={idx}>{item}</p>
            } else {
                return (
                    <ul key={idx}>
                        {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                        ))}
                    </ul>
                )
            }
        })
    }

    return (
        <div className={styles.externalGrantsPage}>
            <section className="page-banner-header">
                <h1>External Grants</h1>
            </section>
            <FrostedCard className={styles.headerCard}>
                <p>
                    <em>Grant applications are now open!</em> Grants are here to help you make things happen. Whether it’s funding a project, supporting your studies, or exploring new opportunities on campus, start by searching the grants below to find the ones you’re eligible for. Don’t miss out on resources designed to help you succeed!</p>
            </FrostedCard>
            <section className={styles.searchbarContainer}>
                <div className={styles.searchbar}>
                    <Search size={20} />
                    <input
                        type="text"
                        placeholder="keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>
                <div className={styles.filterDropdown}>
                    <SlidersHorizontal />
                    <select
                        value={selectedKeyword}
                        onChange={(e) => setSelectedKeyword(e.target.value as ExternalGrantKeyword | 'All')}
                    >
                        {keywords.map(keyword => (
                            <option key={keyword} value={keyword}>
                                {keyword === 'All' ? 'All Keywords' : keyword}
                            </option>
                        ))}
                    </select>
                </div>
                <button className={styles.searchButton} onClick={handleSearch}>
                    Search
                </button>
            </section>

            <section className={styles.grantsContainer}>
                {filteredGrants.length > 0 ? (
                    filteredGrants.map((grant, index) => (
                        <div key={index} className={styles.grantsCard}>
                            
                        <div className={styles.cardLayout}>
                            
                            <div className={styles.grantInfo}>
                                <div className={styles.header}>
                                <div>
                                    <h1>{grant.title}</h1>
                                    <h2>Offered by {grant.granter}</h2>
                                </div>
                            </div>
                                <div className={styles.grantSection}>
                                    <b>Who can apply & what is it aimed for? </b>
                                    {renderBlurb(grant.eligiblityBlurb)}
                                </div>
                                <div className={styles.grantSection}>
                                    <b>Amounts Available</b>
                                    {renderBlurb(grant.amount)}
                                </div>
                                
                                {grant.contact && (
                                    <div className={styles.contact}>
                                        Contact:
                                        {grant.contact && (
                                            <a href={`mailto:${grant.contact}`}>{grant.contact}</a>
                                        )}
                                        
                                    </div>
                                )}
                                {grant.link && (
                                    <div className={styles.contact}>
                                        {grant.link && (
                                            <a href={grant.link} target="_blank" rel="noopener noreferrer">
                                                Learn More
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                                
                            
                            <div className={styles.dates}>
                                    <div className={styles.grantMeta}>
                                    <h3>Deadline: {grant.deadline}</h3>
                                    {grant.opendate && <h3>Opens: {grant.opendate}</h3>}
                                    {grant.responseDate && <h3>Response: {grant.responseDate}</h3>}
                                    </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                                {grant.keywords.length > 0 && (
                                    <div className={styles.keywords}>
                                        {grant.keywords.map((keyword, idx) => (
                                            <small key={idx}>{keyword} </small>
                                        ))}
                                    </div>
                                )}
                            </div>
                    </div>
                    ))
                ) : (
                    <div className={styles.noGrants}>
                        <p>No grants found matching your search criteria.</p>
                        <button onClick={clearFilters}>
                            Clear filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    )
}