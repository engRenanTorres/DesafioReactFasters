import React, { useState } from 'react';
import BotaoPadrao from './BotaoPadrao';

export default function FormularioContato() {
    const[nome,setNome]=useState('');
    const[email,setEmail]=useState('');
    const[mensagem,setMensagem]=useState('');
    const[mensagensRecebidas,setMensagensRecebidas]=useState([]);

  return (
    <form 
    onSubmit={(event)=>{
        event.preventDefault();
        const adicionaMesagem = [...mensagensRecebidas,{nome: nome, email:email, mensagem:mensagem}]
        setMensagensRecebidas(adicionaMesagem);
        console.log(mensagensRecebidas);
    }}>
        <h2 id='formContato'>Contato</h2>
        <div className='divisor'></div>
        <input type='text' value={nome} 
            onChange={(event)=>{
                setNome(event.target.value);
            }}
            placeholder='Nome'
            className='dadosContato'>
        </input>
        <input type='email' value={email} 
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
            placeholder='E-mail'
            className='dadosContato'>
        </input>
        <input type='text' value={mensagem} 
            onChange={(event)=>{
                setMensagem(event.target.value);
            }}
            placeholder='Mensagem'
            className='dadosContato mensagemContato'>
        </input>
        <BotaoPadrao>Enviar Mensagem</BotaoPadrao>
        <address>
            <p className='detalhesContatos detalhesContatosAzul'>Telefones</p>
            <p className='detalhesContatos'><a className='contatoMenu' href='tel:+55 (11) 3088-0757'>+55 (11) 3088-0757</a></p>
            <p className='detalhesContatos detalhesContatosAzul'>E-mail</p>
            <p className='detalhesContatos'><a className='contatoMenu' href='malito:renee@reneetrajar.com.br'>renee@reneetrajar.com.br</a></p>
        </address>
        <p className='detalhesContatosAzul'>Atendimento personalizado</p>
        <button>Clique aqui!</button>
        <style jsx>{`
                form{
                    margin-top:59px;
                    margin-bottom:30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                
                }
                h2{
                    font-family: 'Cormorant Garamond', serif;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 38px;
                    line-height: 46px;
                    /* identical to box height */

                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: var(--azul2);

                }
                button{
                    border: 1px solid #1C86A4;
                    box-sizing: border-box;
                    border-radius: 2px;
                    width:210px;
                    height:50px;
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 22px;
                    /* identical to box height */

                    text-align: center;
                    color: var(--azul);
                }
                .divisor{
                    width: 53px;
                    height: 1px;
                    border-top: thin solid #70B0C4;;
                    margin-top: 10px;
                    margin-bottom: 38px;
                    overflow: hidden
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
                .dadosContato{
                    border: 1px solid #1C86A4;
                    box-sizing: border-box;
                    border-radius: 3px;
                    width:330px;
                    height:42px;
                    margin-bottom:18px;
                }
                .mensagemContato{
                    height: 77px;
                }
                address {
                    margin-top:44px;
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
                .detalhesContatos{
                    margin:0;
                    padding-bottom:8px;
                }
                .detalhesContatosAzul{
                    color: var(--azul2);
                    text-transform: uppercase;
                }

            `}
            </style>
    </form>
  )
}