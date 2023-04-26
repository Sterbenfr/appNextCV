import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';


const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <ul>
                <button className={styles.language} onClick={languageSwitch}>En/Fr</button>
                <li>
                    <Link href='/' className={Activating('/')}>
                        Home                        
                    </Link>
                </li>
                <li>
                    <Link href='/competences' className={Activating('/competences')}>
                        Compétences                   
                    </Link>
                </li>
                <li>
                    <Link href='/projets' className={Activating('/projets')}>
                        Réalisation Perso                    
                    </Link>
                </li>
                <li>
                    <Link href='/formations' className={Activating('/formations')}>
                        Formations                     
                    </Link>
                </li>
                <li>
                    <Link href='/experiences' className={Activating('/experiences')}>
                        Expérience Pro                      
                    </Link>
                </li>
            </ul>  
        </div>
    )
};

function languageSwitch(){
    console.log("nice")
} 

function Activating(link){
    const router = useRouter();
    if ( router.pathname === link){
    return(styles.active)         
    }else{
        return("")
    }
}


export default Navbar;