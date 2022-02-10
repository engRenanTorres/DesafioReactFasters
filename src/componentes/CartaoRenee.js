import BotaoPadrao from "./BotaoPadrao";

export default function CartaoRenee() {

   return (
     <article>
         <h2 id='Empresa'>Renee Trajar</h2>
         <div className='divisor'></div>
         <img className='fotoPerfil' src='/images/perfis/Renee.png'/>
         <p className='mensagem'>
            Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. <br/> <br/>
            Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
        </p>
        <p className='objetivo'> “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.” </p>
        <p className='assinatura'>Renee Trajar</p>
        <BotaoPadrao>Agende uma visita!</BotaoPadrao>
        <style jsx>{`
                 article{
                     margin-top:24px;
                     margin-bottom:42px;
                     display:flex;
                     flex-direction: column;
                     align-items:center;
                     justify-content:center;
                     padding: 0 23px;
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
                 .divisor{
                     width: 53px;
                     height: 1px;
                     border-top: thin solid #70B0C4;
                     margin-top: 10px;
                     margin-bottom: 65px;
                     overflow: hidden
                 }    
                 .fotoPerfil{
                     margin-bottom:33px;
                 }
                 .mensagem{
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 300;
                    font-size: 19px;
                    line-height: 141.3%;
                    /* or 27px */
                    
                    /* Gray 2 */
                    margin-bottom:33px;
                    
                    color: #4F4F4F;
                 }
                 .objetivo{
                    font-family: 'Cormorant Garamond', serif;
                    font-style: italic;
                    margin-bottom:11px;
                    font-weight: normal;
                    font-size: 26px;
                    line-height: 141.3%;
                        /* or 37px */

                    text-align: center;
                    color: var(--azul2)
                 }
                 .assinatura{
                    font-family: 'Cormorant Garamond', serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 141.3%;
                    margin-bottom:29px;
                    /* or 28px */
                    
                    
                    /* Gray 3 */
                    
                    color: #828282;
                 }
 
             `}
             </style>
     </article>
   )
 }