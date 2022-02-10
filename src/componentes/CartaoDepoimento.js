import React, { useState } from 'react';


export default function CartaoDepoimento() {
   const [pessoa,setPessoa]=useState(0); 
   const depoimentos = [
       {
            nome:'Josimar Henrique da Silva',
            profissao: 'Diretor Presidente | Grupo Hebron',
            mensagem: '“Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e possibilidade de customização das roupas, aliados ao excelente atendimento e prazo de entrega são fatores decisivos para mim.”',
            imagem: '/images/perfis/perfil1.png'
       },
       {
           nome:'William H. M. Garrey',
           profissao: 'Advogado | Nelson Garey Advogados Associados',
           mensagem: '“Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee. O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”',
           imagem: '/images/perfis/perfil2.png'
       },
       {
            nome:'Domingos Orestes Chiomento',
            profissao: 'DOC Contabilidade Empresarial',
            mensagem: '“Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”',
            imagem: '/images/perfis/perfil3.png'
        },
        {
            nome:'José Mauro Marques',
            profissao: 'Advogado',
            mensagem: '“Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”',
            imagem: '/images/perfis/perfil4.png'
        },
        {
            nome:'Custódio Pereira',
            profissao: 'Membro do CONSOCIAL - Conselho Superior\nde Responsabilidade Social da FIESP-SP',
            mensagem: '“Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”',
            imagem: '/images/perfis/perfil5.png'
        }
   ]
  return (
    <article>
        <h2 id='Depoimentos'>Depoimentos</h2>
        <div className='divisor'></div>
        <img className='fotoPerfil' src={depoimentos[pessoa].imagem}/>
        <p className='mensagem'>{depoimentos[pessoa].mensagem}</p>
        <p className='nomeDoIndivido'>{depoimentos[pessoa].nome}</p>
        <p className='profissao'>{`${depoimentos[pessoa].profissao}`}</p>
        <ul>
            <li><button onClick={()=>{
                if(pessoa>0)setPessoa(pessoa-1)
            }}>
                <img src='/images/simbolos/DepoAnterior.svg'/>
            </button></li>
            <li className={`referenciasSelecao ${pessoa==0&&'referenciaMacarda'}`}></li>
            <li className={`referenciasSelecao ${pessoa==1&&'referenciaMacarda'}`}></li>
            <li className={`referenciasSelecao ${pessoa==2&&'referenciaMacarda'}`}></li>
            <li className={`referenciasSelecao ${pessoa>=3&&'referenciaMacarda'}`}></li>
            <li><button>
                <img src='/images/simbolos/ProximoDepo.svg' onClick={()=>{
                if(pessoa<4)setPessoa(pessoa+1)
            }}/>
            </button></li>
        </ul>
        <style jsx>{`
                article{
                    
                    background-image: url("/images/backgroundDepo.png");
                    background-color: var(--azul); 
                    height: 782px;
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
                    color: #F2F2F2;
                }  
                .divisor{
                    width: 53px;
                    height: 1px;
                    border-top: thin solid #70B0C4;
                    margin-top: 10px;
                    margin-bottom: 65px;
                    overflow: hidden
                }    
                ul {
                    width:100%;
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 0 65px;
                }
                .referenciasSelecao{
                    width: 14px;
                    height: 14px;
                    border: 1px solid var(--azul2);
                    border-radius: 14px;
                    overflow: hidden;
                    transition: .25s;
                }
                .referenciaMacarda{
                    background:var(--azul2);
                    transition: .25s;
                }
                .fotoPerfil{
                    border-radius: 65px;
                    border: 1px solid var(--dourado);
                    margin-bottom:46px;
                }
                .mensagem{
                    font-family: 'Cormorant Garamond', serif;
                    width: 100%;
                    height: auto;
                    font-style: italic;
                    font-weight: 300;
                    font-size: 24px;
                    line-height: 29px;
                    text-align: center;
                    margin-bottom:27px;

                    color: #C4C4C4;
                }
                .nomeDoIndivido{
                    font-family: 'Cormorant Garamond', serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 24px;
                    text-align: center;

                    color: #BE9667;
                }

                .profissao{
                    font-family: Lato;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 17px;
                    margin-bottom:45px;
                    /* identical to box height */

                    text-align: center;

                    /* cinza */

                    color: #949494;
                }
            `}
            </style>
    </article>
  )
}