import Link from "next/link";
import styles from "./login.module.css";


export default function Login (){
    return(

        <>
            <h1>Log in</h1>
            <form >
                <label htmlFor="pswrd" className={styles.cc}>Password:</label>
                <input
                    type="password"
                    id="pswrd"
                    name="pswrd"
                    pattern="[a-z0-9]{1,15}"
                    title="Password should be digits (0 to 9) or alphabets (a to z)."
                />



            </form>
            <form action="/api/form" method="post">
                <label htmlFor="first" className={styles.hh}>First name:</label>
                <input type="text" id="first" name="first"/>
            </form>
        <form>
                <label htmlFor="last" className={styles.hh}>Last name:</label>
                <input type="text" id="last" name="last"/>

            </form>
            <form>
                <label htmlFor="last" className={styles.hh}>Email:</label>
                <input type="text" id="last" name="last"/>

            </form>
            <form>
                <Link href = "/dekujeme " className={styles.jj}>Submit</Link>
            </form>


        </>

    )
}