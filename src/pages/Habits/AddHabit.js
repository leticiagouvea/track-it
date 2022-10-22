import { useState } from "react";
import { getHabits, postHabits } from "../../service/trackItService";
import styled from "styled-components";

export default function AddHabit({visibleHabit, setVisibleHabit, setLisHabits}) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);

    console.log(days)

    const weekdays = [
    {
        id: 0,
        day: "D",
        status: true
    }, 

    {
        id: 1,
        day: "S",
        status: true
    },

    {
        id: 2,
        day: "T",
        status: true
    },

    {
        id: 3,
        day: "Q",
        status: true
    },

    {
        id: 4,
        day: "Q",
        status: true
    },

    {
        id: 5,
        day: "S",
        status: true
    },

    {
        id: 6,
        day: "S",
        status: true
    }
];

    const [daySelected, setDaySelected] = useState(weekdays);

    function createHabit(e) {
        e.preventDefault()

        const body = {
            name,
            days
        }

        if (name === "" || days.length === 0) {
            return alert("Preencha os campos para criar hábito")
        }

        postHabits(body)
        .then((res) => {
            resetForm();
            setVisibleHabit(false);
            getHabits()
            .then((res) => setLisHabits(res.data))
        })
        .catch((err) => {
            console.log(err.data)
        })
    }

    function selected(day) {
        if (days.includes(day.id)) {
            day.status = true;
            const newDays = days.filter(value => value !== day.id) 
            setDays(newDays)
        } else {
            day.status = false;
            setDays([...days, day.id])
        }
    }

    function resetForm() {
        setName("");
        setDays("");
    }

    return (
        <HabitContainer visibleHabit={visibleHabit} >
                <input
                    placeholder="nome do hábito"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />

                <div className="weekdays">
                {daySelected.map((value, index) => (
                    <Day key={index} status={value.status} onClick={
                        () => selected(value)
                    }> {value.day}
                    </Day>   
                ))}
                </div>
                
                <div className="buttons">
                    <button className="cancel" onClick={() => setVisibleHabit(false)}>Cancelar</button>
                    <button className="save" onClick={createHabit}>Salvar</button>
                </div>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    height: 180px;
    margin: 30px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.visibleHabit ? ("flex") :  ("none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 86vw;
    }

    .weekdays {
        display: flex;
        margin: 10px 0px 15px 0px;
    }

    .buttons {
        display: flex;
        justify-content: right;

        .cancel {
        background-color: #FFFFFF;
        color: #52B6FF;
        margin-right: 10px;
        font-size: 15px;
        height: 35px;
        width: 84px;
        }

        .save {
        font-size: 15px;
        width: 84px;
        height: 35px;
        }
    }

    @media (max-width: 375px) {
        width: 90vw;
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