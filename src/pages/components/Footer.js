import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import userContext from "../../context/userContext";
import styled from "styled-components";

export default function Footer() {
    const { todayHabits } = useContext(userContext);

    function percentageHabits() {
        const done = todayHabits.filter(value => value.done).length;
        const total = todayHabits.length;

        return ((done / total) * 100).toFixed(0);
    }

    return (
        <FooterContainer>
            <Link to="/habitos">
                <h1 data-identifier="habit-page-action">Hábitos</h1>
            </Link>

            <div>
                <Link to="/hoje">
                <CircularProgressbar
                        value={todayHabits.length === 0 ? ('0') : (percentageHabits())}
                        text='Hoje'
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        })}
                />
                </Link>
            </div>

            <Link to="/historico">
                <h1 data-identifier="historic-page-action">Histórico</h1>
            </Link>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #52B6FF;
    z-index: 2;

    div {
        width: 90px;
        height: 90px;
        margin-bottom: 50px;
        cursor: pointer;
    }

    h1 {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`