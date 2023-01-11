import Link from "next/link";
import styles from "./project.module.css";





export default function Project() {

    return (
        <>



            <h1> Muj prvni projekt </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

            <Link href="/" className={styles.kk}>HOME</Link>

        </>
    )
}
