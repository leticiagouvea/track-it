import { useState } from "react";
import { getHabits, postHabits } from "../../service/trackItService";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";

export default function AddHabit({visibleHabit, setVisibleHabit, setLisHabits}) {
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);

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
        e.preventDefault();
        setLoading(true);

        const body = {
            name,
            days
        }

        if (name === "" || days.length === 0) {  
            setTimeout(() => {
                alert("Preencha os campos para criar hábito");
                setLoading(false);
            }, 500);        
            return;
        }

        postHabits(body)
        .then((res) => {
            resetForm();
            setVisibleHabit(false);
            setLoading(false);
            getHabits()
            .then((res) => setLisHabits(res.data))
        })
        .catch((err) => {
            alert("Erro ao salvar hábito. Tente novamente.");
            setLoading(false);
        })
    }

    function selected(day) {
        if (days.includes(day.id)) {
            day.status = true;
            const newDays = days.filter(value => value !== day.id); 
            setDays(newDays);
        } else {
            day.status = false;
            setDays([...days, day.id]);
        }
    }

    function resetForm() {
        setName("");
        setDays("");
        setDaySelected(weekdays);
    }

    return (
        <HabitContainer visibleHabit={visibleHabit} >
            <div className="infos-habit">
                <input data-identifier="input-habit-name"
                    placeholder="nome do hábito"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    disabled={loading}
                />

                <div className="weekdays">
                {daySelected.map((value, index) => (
                    <Day data-identifier="week-day-btn" key={index} status={value.status} disabled={loading}
                    onClick={() => selected(value)}> {value.day}</Day>
                ))}
                </div>
            </div>

            <div className="buttons">
                <button data-identifier="cancel-habit-create-btn" className="cancel" onClick={() => setVisibleHabit(false)}>Cancelar</button>
                <button data-identifier="save-habit-create-btn" className="save" onClick={createHabit}>
                    {loading ?
                        (<ThreeDots color="#ffffff" height={50} width={50} />) :
                        ("Salvar")}
                </button>
            </div>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    height: 180px;
    margin: 0px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.visibleHabit ? ("flex") :  ("none")};
    justify-content: space-evenly;
    position: relative;
    padding-top: 30px;

    input {
        width: 86vw;
    }

    .weekdays {
        display: flex;
        margin: 10px 0px 25px 0px;
    }

    .buttons {
        display: flex;
        position: absolute;
        bottom: 20px;
        right: 20px;

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

    @media (max-width:375px) {
        width: 330px;

        input {
            width: 310px;
        }

        .buttons {
            right: 10px;
        }
    }
`

const Day = styled.button`
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