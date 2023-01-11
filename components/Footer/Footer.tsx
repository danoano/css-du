import Link from "next/link";

import styles from "./Footer.module.css";


export function Footer (){
    return(

        <>

            <ul className={styles.ull}>
                <li className={styles.ull}>
                    <Link href="/pages/about" >about</Link>
                </li>
                <li>
                    <Link href="/pages/project">project</Link>
                </li>
                <li>
                    <Link href="/pages/contact">contact</Link>
                </li>
            </ul>

        </>

    )
}