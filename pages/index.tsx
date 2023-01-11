import Link from "next/link";
import styles from "./index.module.css";



function Card(props: { src: string }) {
  return null;

}

export default function Home() {
  return (
  <>
    <h1> Moje první stranka </h1>
    <b className={styles.ll}> Beatmaking, tutorialy, a pod...</b>


    <form >


      <Link href = "/blog"  className={styles.tt}>BLOG</Link>

    </form>
    <form >


      <Link href = "https://www.instagram.com/zore_b34ts/"  className={styles.tt}> UKAŽKA MOJICH BEATOV</Link>

    </form>







  </>

  )
}
