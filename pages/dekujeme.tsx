import Link from "next/link";
import styles from "./dekujeme.module.css";


export default function Dekujeme (){
    return(

        <>
            <h1 className={styles.uu}> Děkujeme za přihlášení  </h1>
            <Link href= "/" className={styles.ss}>HOME</Link>


            </>
            )
            }