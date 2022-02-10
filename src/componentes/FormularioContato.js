import React, { useState } from 'react';

export default function FormularioContato() {
    const[nome,setNome]=useState('');
    const[email,setEmail]=useState('');
    const[mensagem,setMensagem]=useState('');

  return (
    <form 
    onSubmit={(event)=>{
        event.preventDefault();
    }}>
        <h2>Contato</h2>
        <br></br>
        <input type='text' value={nome} 
            onChange={(event)=>{
                setNome(event.target.value);
            }}
            placeholder='nome'>
        </input>
        <input type='email' value={email} 
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
            placeholder='E-mail'>
        </input>
        <input type='text' value={mensagem} 
            onChange={(event)=>{
                setMensagem(event.target.value);
            }}
            placeholder='E-mail'>
        </input>
        <style jsx>{`
                form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                
                }
                br{
                    border-top: thin solid #70B0C4;
                    
                    padding-bottom:39px;
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
    </form>
  )
}