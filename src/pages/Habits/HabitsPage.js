import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddHabit from "./AddHabit";
import { getHabits } from "../../service/trackItService";
import Habit from "./Habit";

export default function Habits() {
    const [visibleHabit, setVisibleHabit] = useState(false);
    const [listHabits, setLisHabits] = useState([]);

    useEffect(() => {
        getHabits()
        .then((res) => {
            setLisHabits(res.data)
        })
    }, [])

    return (
        <>
        <Header />
        <HabitsBody>
            <div className="add-habits">
                <h1>Meus hábitos</h1>
                <button onClick={() => setVisibleHabit(!visibleHabit)}>+</button>
            </div>

            <AddHabit visibleHabit={visibleHabit} setVisibleHabit={setVisibleHabit} setLisHabits={setLisHabits} />

            {listHabits.length ? (
                listHabits.map(value => (
                    <Habit name={value.name} days={value.days} id={value.id} setLisHabits={setLisHabits}/>
                ))) : 
            
            (<h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>)}
        </HabitsBody>
        <Footer />
        </>
    )
}

const HabitsBody = styled.body`
    margin-top: 72px;
    min-height: 700px;
    min-width: 375px;
    padding-bottom: 200px;
    min-width: 375px;
    background-color: #E5E5E5;

    .add-habits {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 40px;
        margin-bottom: 30px;
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
        line-height: 1.4;
    }

    @media (max-width:375px) {
        h2, .add-habits {
            width: 330px;
        }
    }
`