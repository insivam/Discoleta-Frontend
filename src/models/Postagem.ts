import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    imagem: string;
    data: string;
    bairro: string;
    tema?: Tema| null
}

export default Postagem;