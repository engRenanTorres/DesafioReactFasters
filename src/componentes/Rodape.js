import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';


export default function Rodape() {
  return (
    <footer className={styles.footer}>
        <Image className='logo' src="/images/LogoFooter.svg" alt="Renee Trajar Logo" width={139} height={68} />
        <p>CNPJ:04.487.685/0001-01</p>
        <small>Copyright: 2021 &copy; Renee Trajar<br/>Todos os direitos reservados.</small>
        <style jsx>{`
                footer{
                    border-top: thin solid var(--dourado);
                    margin:2px 23px;
                    padding-top:26px;
                
                }
                .logo{
                    background:black;
                }
                p{
                    
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 21px;
                    text-align: center;
                    margin: 14.5px 0;
                    
                    /* Gray 4 */
                    
                    color: #BDBDBD; 
                }
                small{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 21px;
                    text-align: center;

                    /* Gray 2 */

                    color: #4F4F4F;
                }

            `}
            </style>
    </footer>
  )
}