import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <p>VITE</p>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>

      <main className='textInicial'>

        <h1>APRENDENDO SOBRE O VITE</h1>

        <div className='textoVite'>
          <p>React Vite é uma combinação entre o React, uma biblioteca JavaScript popular para a
            construção de interfaces de usuário, e o Vite, uma ferramenta de construção de aplicativos web de próxima geração. O Vite é conhecido por sua rápida inicialização e tempo de compilação, tornando-o uma escolha atraente para desenvolvedores que buscam eficiência e desempenho em seus projetos.</p>

          <p>O React Vite oferece uma experiência de desenvolvimento ágil e eficiente para aplicativos React. Ele utiliza o Vite como seu sistema de compilação, aproveitando a capacidade do Vite de fornecer recarregamento rápido durante o desenvolvimento, bem como uma compilação otimizada para produção.</p>

          <p>Ao optar pelo React Vite, os desenvolvedores podem desfrutar de uma configuração de projeto simplificada e um fluxo de trabalho de desenvolvimento mais suave. A integração nativa entre o React e o Vite permite que os desenvolvedores se concentrem na criação de componentes de interface de usuário de alta qualidade, enquanto o Vite cuida da compilação e otimização do código.</p>

          <p>Além disso, o React Vite suporta recursos modernos, como carregamento sob demanda de módulos (importação dinâmica), CSS modular e uma variedade de plugins que facilitam a integração de bibliotecas e ferramentas externas.</p>

          <p>Em resumo, o React Vite é uma poderosa combinação de duas tecnologias líderes no desenvolvimento web, oferecendo aos desenvolvedores uma maneira eficiente e produtiva de construir aplicativos React de alto desempenho.</p>

        </div>

      </main>

    <footer>

      <h2>TESTE</h2>

    </footer>



    </>

  )
}

export default App
