import { useState } from "react";
import styled from "styled-components";
import Check from "../../assets/img/check.png";
import { checkHabit, uncheckHabit } from "../../service/trackItService";

export default function TodayHabitContainer({ id, name, done, currentSequence, highestSequence }) {
    const [current, setCurrent] = useState(currentSequence);
    const [highest, setHighest] = useState(highestSequence);
    const [check, setCheck] = useState(done);

    function doneHabit() {
        if (!check) {
            setCheck(true);
            checkHabit(id);
            setCurrent(current + 1);
            
            if (current === highest) {
                setHighest(highest + 1);
            }

        } else {
            setCheck(false);
            uncheckHabit(id);
            setCurrent(current - 1);
            setHighest(highest - 1);  
        }
    }

    return (
        <HabitContainer data-identifier="today-infos" check={check}>
            <div className="habit-infos">
                <h3>{name}</h3>

                <div className="current-sequence">
                    <span>Sequência atual: </span>
                    <p>{current} {current <= 1 ? ("dia") : ("dias")}</p>
                </div>

                <div className="current-sequence">
                    <span>Seu recorde: </span>
                    <Record check={(current === highest) !== 0 ? (true) : (false)}>
                        <p>{highest} {highest <= 1 ? ("dia") : ("dias")}</p>
                    </Record>
                </div>
            </div>

            <ButtonCheck data-identifier="done-habit-btn" check={check} onClick={doneHabit}>
                <img src={Check} alt="check" />
            </ButtonCheck>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    min-height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    line-height: 1.3;
    position: relative;
    overflow: hidden;
    
    h3 {
        width: 80vw;
        padding-right: 50px;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
        line-height: 1.5;
        color: ${props => props.check ? ("#8FC549") : ("#666666")}
    }

    span {
        font-size: 12px;
        line-height: 1.5;
        margin-right: 5px;
    }

    .current-sequence {
        display: flex;
    }

    @media (max-width:700px) {
        h3 {
            width: 60vw;
            padding-right: 40px;
        }
    }
`

const Record = styled.p`
    font-size: 12px;
    color: ${props => props.check ? ("#8FC549") : ("#666666")};
`

const ButtonCheck = styled.div`
    position: absolute;
    right: 20px;
    width: 70px;
    height: 70px;
    background-color: ${props => props.check ? ("#8FC549") : ("#EBEBEB")};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.5s;
`