import styled from "styled-components";
import Header from "../components/Header";
import Check from "../../assets/img/check.png"
import Footer from "../components/Footer";

export default function Today() {
    return (
        <ListHabits>
            <Header />
            <h1 className="date">Segunda, 17/05</h1>
            <h2>Nenhum hábito concluído ainda</h2>

            <HabitContainer>
                <div className="habit-infos">
                    <h3>Ler 1 capítulo de livro</h3>
                    <p>Sequência atual:</p>
                    <p>Seu recorde:</p>
                </div>

                <div className="check">
                    <img src={Check} alt="check" />
                </div>
            </HabitContainer>
            <Footer />
        </ListHabits>
    )
}

const ListHabits = styled.div`
    min-height: 700px;
    padding-bottom: 200px;
    min-width: 375px;
    background-color: #E5E5E5;
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666666;

    .date {
        font-size: 22px;
        color: #126BA5;
        margin-bottom: 8px;
        padding-top: 30px;
    }

    h2 {
        font-size: 17px;
        color: #BABABA;
        margin-bottom: 14px;
        text-align: left;
    }
`

const HabitContainer = styled.div`
    width: 340px;
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    h3 {
        font-size: 19px;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
        line-height: 1.1;
    }

    .check {
        width: 70px;
        height: 70px;
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        color: #FFFFFF;
        font-weight: 900;
    }
`