import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';

const cesta = {
    topo: {
        titulo: "Detalhes da Cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente direto da fazenda para sua cozinha.",
        preco: "R$30,00",
        botao: "COMPRAR",
    },
    itens: {
        titulo: "Itens da Cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brocolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
        ]
    }
}

export default cesta;