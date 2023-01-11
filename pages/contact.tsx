import Link from "next/link";
import styles from "./contact.module.css";



export default function Contact() {
    return (
        <>
            <h1> Kontakty </h1>
            <p> Tel.: +420 604 474 410</p>
            <p> Instagram: @_.danoano._ / @zore.b34ts  </p>
            <p> Email: danulito@gmail.com </p>
            <Link href="/" className={styles.pp}>HOME</Link>
        </>
    )
}
