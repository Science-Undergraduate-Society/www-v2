"use client"

import { useState } from 'react'
import { tutors } from '@/data/tutors'
import styles from './Tutors.module.css'

const TUTORS_PER_PAGE = 6

export default function Tutors() {
  const [filter, setFilter] = useState<string>('')
  const [page, setPage] = useState<number>(1)

  const departments: string[] = Array.from(
    new Set(tutors.flatMap(tutor =>
      tutor.courses.map(course => course.split(' ')[0].toUpperCase())
    ))
  ).sort()

  const filteredTutors = tutors.filter(tutor => tutor.courses.some(course => course.startsWith(filter))) || tutors

  const paginatedTutors = filteredTutors.slice(
    (page - 1) * TUTORS_PER_PAGE,
    page * TUTORS_PER_PAGE
  )

  const prevDisabled = page === 1

  const nextDisabled = page === Math.ceil(filteredTutors.length / TUTORS_PER_PAGE)

  function handleFilter(department: string) {
    if (filter === department) {
      setFilter('')
    } else {
      setFilter(department)
    }

    setPage(1)
  }

  function handlePrev() {
    if (prevDisabled) {
      return
    }

    setPage(page - 1)
  }

  function handleNext() {
    if (nextDisabled) {
      return
    }
  
    setPage(page + 1)
  }

  return (
    <div className={styles.tutors}>
      <div className={styles.filters}>
        {departments.map(department => (
          <div
            key={department}
            className={`${styles.department} ${filter === department ? styles.selected : ''}`}
            onClick={() => handleFilter(department)}
          >
            {department}
          </div>
        ))}
      </div>
      <div className={styles.cards}>
        {paginatedTutors.map(tutor => (
          <div
            key={tutor.name}
            className={styles.card}
          >
            <img src={tutor.image} alt={tutor.name} draggable="false" />
            <div className={styles.profile}>
              <h1>{tutor.name}</h1>
              <p>{tutor.bio}</p>
              <br />
              <p><b>Courses Taught: </b>{tutor.courses.join(', ')}</p>
              <a href={tutor.link}>Koalender</a>
            </div>
          </div>
        ))}
        <div className={styles.buttons}>
          <div
            className={`${styles.prev} ${prevDisabled ? styles.disabled : ''}`}
            onClick={() => handlePrev()}
          >
            <div className={styles.button}>
              <div className={styles.bar} />
              <div className={styles.bar} />
            </div>
          </div>
          <div className={styles.page}>{page}</div>
          <div
            className={`${styles.next} ${nextDisabled ? styles.disabled : ''}`}
            onClick={() => handleNext()}
          >
            <div className={styles.button}>
              <div className={styles.bar} />
              <div className={styles.bar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
