import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import AbaMenu from '../src/componentes/AbaMenu';
import FormularioContato from '../src/componentes/FormularioContato';
import Rodape from '../src/componentes/Rodape';



export default function Home() {
  const [ativaAbaMenu,setAtivaAbaMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Renee Trajar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/LogoIcon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </Head>

      <header className={styles.header}>
        <button className={styles.iconeMenu} onClick={()=>setAtivaAbaMenu(!ativaAbaMenu)}><img  src="/images/Menu.svg"/></button>
        <img className={styles.logoInicial}src="/images/Logo.svg"/>
      </header>
      <AbaMenu estadoAba={ativaAbaMenu} acaoAba={setAtivaAbaMenu}/>  
      <main className={styles.main}>
        <h1 className={styles.titulo}>
          Elegante é ter um <br/>
          <span className={styles.tituloSpan}>alfaiate</span></h1>
        <p className={styles.tituloFinal}> para chamar de seu. </p>
        <h2 className={styles.chamada}>Compre hoje, pague em até 3x com 12% de desconto e tenha 10 meses para confeccionar!</h2>
        <button className={styles.wtspLink}><img src='/images/wtsp.svg'/></button>
        <button className={styles.botaoDeChamada}>Faça já um orçamento</button>
        
      </main>
      <FormularioContato/>
      <Rodape/>

    </div>
  )
}
