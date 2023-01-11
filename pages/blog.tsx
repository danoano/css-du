import Link from "next/link";
import styles from "./blog.module.css";


export default function Blog() {
    return (
        <>
            <h1> Muj prvni blog </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <Link href="/" className={styles.uu}>HOME</Link>
        </>
    )
}
