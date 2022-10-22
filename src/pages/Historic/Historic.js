import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historic() {
    return (
        <HistoricContainer>
            <Header />
                <h4>Histórico</h4>
                <h5>Em breve você poderá ver o histórico dos seus hábitos aqui!</h5>
            <Footer />
        </HistoricContainer>
    )
}

const HistoricContainer = styled.div`
    margin-top: 72px;
    width: 100%;
    min-height: 700px;
    padding-bottom: 200px;
    min-width: 375px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px;
    
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
        text-align: left;
    }
`
