import Link from "next/link";
import styles from './page.module.css'
export default function About(){
    return (
        <>  

        {/* if we are inside the return and we use {}, it indidcate */}
        {/* that we want to perform a Javascript*/}
         
        <h1 className={styles.text}>This is the about page</h1>
        <p className={`${styles.text} `}> I am a styled with the global</p> 

        <Link href="/">Home</Link>


        </>
    

    )

}



