import styled from "styled-components";
import { deleteHabit, getHabits } from "../../service/trackItService";
import { IoTrashOutline } from "react-icons/io5";

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
            <p data-identifier="habit-name">{name}</p>
            <div>
                {weekdays.map((value, index) => (
                    <Day key={index} status={days.indexOf(index) === -1}>
                        {value}
                    </Day>
                ))}
            </div>

            <IoTrashOutline data-identifier="delete-habit-btn" className="trash-icon" onClick={eraseHabit}/>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    min-height: 90px;
    padding: 18px 20px;
    margin: 20px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    line-height: 1.3;
    overflow: hidden;

    p {
        max-width: 90vw;
        padding-right: 50px;
        margin-bottom: 12px;
    }

    div {
        display: flex;
    }

    .trash-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
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