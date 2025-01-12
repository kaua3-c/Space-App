import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const ImagemSVG = styled.img`
    width: 50px;
    height: 50px;
`;
function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>
                <li>
                    <a href="https://www.linkedin.com/in/kauabarros/">
                        <ImagemSVG src="/imagens/LinkedIn_icon.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kaua3-c">
                        <ImagemSVG src="/imagens/github.svg" alt=""/>
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Kauã e alura</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;