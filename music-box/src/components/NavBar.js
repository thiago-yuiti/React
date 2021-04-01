import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

function NavBar() {
    return(
        <nav>
            <div className="container">
                <img className="logo" src={logo} alt="Logo"/>
                    <img src={avatar} alt="Avatar" className="avatar"/>
            </div>
        </nav>
    );
}

export default NavBar;
/* 

1. importa o react (linha 1)
2. cria a função com o nome do seu componente

function MeuComponente() {
    return (
       **** aqui vem o html ****
    );
}

3. exporta (na última linha do seu arquivo de componente!)
export default MeuComponente;

4. Ajuste o seu HTML
4.1. Troque class por className
4.2. Adicione barra em "self-closing" tags <img /> <br /> <input />
4.3. importe imagens ao componente!!

import minhaImagem from 'local/da/imagem.jpg'

*/
