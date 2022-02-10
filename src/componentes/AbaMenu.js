import React from 'react';
import styles from '../../styles/Home.module.css';


export default function AbaMenu({estadoAba,acaoAba}) {
  return (
    <div className={estadoAba?'abaMenuAtiva':'abaMenuDesativa'}>
        <button className='closeButton' onClick={()=>acaoAba(!estadoAba)}><img   src="/images/CloseIcon.svg"/></button>
        <nav >
            <ul className={styles.abaMenuUl}>
                <li className='abaMenulink abaMenuAtivo'><a href='#'>Empresa</a></li>
                <li className='abaMenulink'><a href='#'>Camisaria</a></li>
                <li className='abaMenulink'><a href='#'>Alfataria</a></li>
                <li className='abaMenulink'><a href='#'>Depoimentos</a></li>
                <li className='abaMenulink'><a href='#formContato'>Contato</a></li>
            </ul>

        </nav>
        <address>
            <p>Telefones</p>
            <p><a className='contatoMenu' href='tel:+55 (11) 3088-0757'>+55 (11) 3088-0757</a></p>
            <p>E-mail</p>
            <p><a className='contatoMenu' href='malito:renee@reneetrajar.com.br'>renee@reneetrajar.com.br</a></p>
        </address>
        <style jsx>{`
                div {
                    position: absolute;
                    background: var(--azul);
                    z-index: 1;
                    height: 735px;
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center; 
                }
                .abaMenuAtiva{
                    top: 0;
                    transition: .25s;
                }
                .abaMenuDesativa{
                    top: -735px;
                    transition: .25s;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                li{
                    text-align: center;
                    margin-bottom: 43px;
                }
                button{
                    width:27px;
                    align-self: flex-end;
                    margin-top:27px;
                    margin-right:25px;
                }
                .abaMenulink {
                    font-weight: 300;
                    font-size: 26px;
                    line-height: 31px;
                    text-align: center;
                    text-transform: uppercase;
                    color: var(--dourado);
                }
                address {
                    margin-top:74px;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 22px;
                    color: var(--azul2);
                    text-align: center;
                    text-transform: uppercase;
                    
                }
                .contatoMenu{
                    font-family: Lato;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 150.1%;
                    text-transform: lowercase;
                    /* identical to box height, or 27px */
                    
                    text-align: center;

                    /* Gray 3 */

                    color: #828282;
                }
                p{
                    padding-bottom:8px;
                }


            `}
            </style>
    </div>
  )
}