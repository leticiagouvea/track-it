import styled from "styled-components";
import { deleteHabit, getHabits } from "../../service/trackItService";

export default function Habit({ name, days, id, setLisHabits }) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function eraseHabit() {
        const erase = window.confirm("Tem certeza que deseja excluir esse hábito?");

        if (erase === true) {
            deleteHabit(id)
            .then(() => getHabits()
            .then((res) => setLisHabits(res.data))
            )
        }
    }

    return (
        <HabitContainer>
            <p>{name}</p>
            <div>
                {weekdays.map((value, index) => (
                    <Day key={index} status={days.indexOf(index) === -1}>
                        {value}
                    </Day>
                ))}
            </div>
            <div className="trash" onClick={eraseHabit}>

            </div>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    height: 90px;
    margin: 30px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 20px;
    position: relative;

    p {
        margin-bottom: 8px;
    }

    div {
        display: flex;
    }

    .trash {
        width: 20px;
        height: 20px;
        background-color: blue;
        position: absolute;
        right: 20px;
        top: 20px;
    }
`

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin-right: 3px;
    background-color: ${props => props.status ? ("#FFFFFF") : ("#D4D4D4")};
    border: 1px solid #D4D4D4;
    color: ${props => props.status ? ("#D4D4D4") : ("#FFFFFF")};
`