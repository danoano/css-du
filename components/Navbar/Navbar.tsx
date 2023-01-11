import Link from "next/link";

import styles from "./Navbar.module.css";


export function Navbar (){
    return(

        <>

            <ul className={styles.ull}>
                <li className={styles.pl}>
                    <Link href="/about" >ABOUT</Link>
                </li>
                <li className={styles.pl}>
                    <Link href="/project">PROJECT</Link>
                </li>
                <li className={styles.pl}>
                    <Link href="/contact">CONTACT</Link>
                </li>
                <li className={styles.pl}>
                    <Link href="/login">LOG IN</Link>
                </li>
            </ul>

        </>

    )
}

