import styled from "styled-components";

export default function AddHabit() {
    return (
        <HabitContainer>
            <form>
                <input
                    placeholder="nome do hábito"
                    type="text"
                />

                <div className="weekdays">
                    <button className="weekday-button">D</button>
                    <button className="weekday-button">S</button>
                    <button className="weekday-button">T</button>
                    <button className="weekday-button">Q</button>
                    <button className="weekday-button">Q</button>
                    <button className="weekday-button">S</button>
                    <button className="weekday-button">S</button>
                </div>
                
                <div className="buttons">
                    <button className="cancel">Cancelar</button>
                    <button className="save">Salvar</button>
                </div>
            </form>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    height: 180px;
    margin: 30px auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 86vw;
    }

    .weekdays {
        display: flex;
        margin: 10px 0px 15px 0px;

        .weekday-button {
        width: 30px;
        height: 30px;
        margin-right: 3px;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        color: #D4D4D4;
        }
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