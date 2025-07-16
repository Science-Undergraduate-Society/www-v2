import styles from './executives.module.css'
import { executives } from '@/data/executives'
import { Executive } from '@/lib/types'

export default function Executives({

} : {

}) {

    return (
        <div className={styles.container}>
            Executives Page

            {/* EXAMPLE: TODO: REMOVE!!! */}
            {executives.map((e: Executive) => (
                <div key={e.name} className={styles.card}>
                    <h2>{e.name}</h2>
                    <p>{e.role}</p>
                    <p>{e.description}</p>
                    {e.imagePath && (
                        <img src={e.imagePath} alt={e.name} className={styles.image} />
                    )}
                </div>
            ))}
        </div>
    )
}