import { routes } from '@/data/routes'
import styles from './Navbar.module.css'
import { Route } from '@/lib/types'

export default function Navbar({

} : {

}) {

    return (
        <div className={styles.container}>
            Join SUS Page

            {routes.map((r: Route) => (
                <div>
                </div>
            ))}
        </div>
    )
};