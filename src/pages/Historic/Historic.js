import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historic() {
    return (
        <>
        <Header />
        <HistoricContainer>
                <h4>Histórico</h4>
                <h5>Em breve você poderá ver o histórico dos seus hábitos aqui!</h5>
        </HistoricContainer>
        <Footer />
        </>
    )
}

const HistoricContainer = styled.div`
    margin-top: 72px;
    min-height: 700px;
    min-width: 375px;
    padding-bottom: 200px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    h4 {    
        font-size: 23px;
        color: #126BA5;
        padding-top: 30px;
        margin-bottom: 15px;
    }

    h5 {
        width: 375px;
        font-size: 17px;
        color: #666666;
        margin-bottom: 14px;
        line-height: 1.4;
    }

    @media (max-width:375px) {
        h4, h5 {
        width: 330px;
        }
    }
`
