import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <FooterContainer>
            <Link to="/habitos">
                <h1>Hábitos</h1>
            </Link>

            <Link to="/hoje">
                <div className="today-circle">Hoje</div>
            </Link>

            <Link to="/historico">
                <h1>Histórico</h1>
            </Link>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    color: #52B6FF;
    z-index: 2;

    .today-circle {
        width: 90px;
        height: 90px;
        border-radius: 50px;
        color: #FFFFFF;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 50px;
        cursor: pointer;
    }

    h1 {
        cursor: pointer;
    }

    @media (max-width: 375px) {
        width: 100vw;
    }
`