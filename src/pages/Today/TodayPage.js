import { useContext, useEffect } from "react";
import { getTodayHabits } from "../../service/trackItService";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from "styled-components";
import Header from "../components/Header";
import TodayHabitContainer from "./TodayHabitContainer.js";
import Footer from "../components/Footer";
import userContext from "../../context/userContext";

export default function Today() {
    const date = dayjs().locale("pt-br").format("dddd, DD/MM");
    const { todayHabits, setTodayHabits } = useContext(userContext);

    useEffect(() => {
        getTodayHabits()
        .then((res) => {setTodayHabits(res.data)})
    }, [todayHabits, setTodayHabits]);

    function percentageHabits() {
        const done = todayHabits.filter(value => value.done).length;
        const total = todayHabits.length;

        return ((done/total) * 100).toFixed(0);
    }

    return (
        <>
        <Header />
        <ListHabits>
            <h1 data-identifier="today-infos" className="date">{date[0].toUpperCase() + date.substring(1)}</h1>

            <TextProgress data-identifier="today-infos" done={todayHabits.filter(value => value.done).length > 0}>
                {todayHabits.filter(value => value.done).length > 0 ? (<h2>{percentageHabits()}% dos hábitos concluídos</h2>) : (<h2>Nenhum hábito concluído ainda</h2>)}
            </TextProgress>

            {todayHabits.map((value, index) =>
                <TodayHabitContainer key={index} id={value.id} done={value.done} name={value.name} currentSequence={value.currentSequence} highestSequence={value.highestSequence} /> 
            )}
        </ListHabits>
        <Footer />
        </>
    )
}

const ListHabits = styled.div`
    min-width: 375px;
    min-height: 700px;
    padding-bottom: 200px;
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
`

const TextProgress = styled.div`
    h2 {
        font-size: 17px;
        color: ${props => props.done ? ("#8FC549") : ("#BABABA")};
        margin-bottom: 25px;
        text-align: left;
    }
`