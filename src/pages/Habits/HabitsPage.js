import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddHabit from "./AddHabit";

export default function Habits() {
    return (
        <>
        <Header />
        <HabitsBody>
            <div className="add-habits">
                <h1>Meus hábitos</h1>
                <button>+</button>
            </div>

            <AddHabit />
            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
        </HabitsBody>
        <Footer />
        </>
    )
}

const HabitsBody = styled.body`
    margin-top: 72px;
    width: 100%;
    min-height: 700px;
    padding-bottom: 200px;
    min-width: 375px;
    background-color: #E5E5E5;

    .add-habits {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0px 0px 0px;
        margin-bottom: 15px;
        height: 50px;

        h1 {
            font-size: 23px;
            color: #126BA5;
        }

        button {
            width: 40px;
            height: 35px;
            font-size: 30px;
            padding-bottom: 5px;
        }
    }

    h2 {
        width: 90vw;
        margin: 0 auto;
        color: #666666;
        text-align: left;
    }

    @media (max-width: 375px) {
        width: 100vw;
    }
`