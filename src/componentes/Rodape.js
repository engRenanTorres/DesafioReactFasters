import React from 'react';
import Image from 'next/image';


export default function Rodape() {
  return (
    <footer>
        <Image className='logo' src="/images/LogoFooter.svg" alt="Renee Trajar Logo" width={139} height={68} />
        <p>CNPJ:04.487.685/0001-01</p>
        <small>Copyright: 2021 &copy; Renee Trajar<br/>Todos os direitos reservados.</small>
        <a href='#topo'><img className='voltarTopo' src="/images/simbolos/voltarTopo.svg" alt="Voltar ao topo da página"/></a>
        <style jsx>{`
                footer{
                    height: 273px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-self: center;
                    border-top: thin solid var(--dourado);
                    margin:0 23px;
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
                a{
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    position: relative;
                    bottom:95px;
                    align-self:flex-end;
                    width: 40px;
                    height: 40px;
                    background: #FFFFFF;
                    border-radius: 4px;
                    box-shadow: 2px 2px 10px grey;
                }

            `}
            </style>
    </footer>
  )
}