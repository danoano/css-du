import Link from "next/link";
import styles from "./about.module.css";



export default function About() {
    return (
        <>
            <h1> Neco o projektu </h1>
            <p>Nový projekt kde se kazdy naučí něco o hudbě, jak ji tvořit,</p>
            <p>jak začít a jak se stat úspěšným beatmakerom </p>
            <Link href="/" className={styles.ee}>HOME</Link>
        </>
    )
}
