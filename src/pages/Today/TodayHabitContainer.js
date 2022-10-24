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
                setHighest(highest + 1)
            }

        } else {
            setCheck(false);
            uncheckHabit(id);
            setCurrent(current - 1);
            setHighest(highest - 1);  
        }
    }

    return (
        <HabitContainer check={check}>
            <div className="habit-infos">
                <h3>{name}</h3>

                <div className="current-sequence">
                    <span>Sequência atual: </span>
                    <p>{current} {current <= 1 ? "dia" : "dias"}</p>
                </div>

                <div className="current-sequence">
                    <span>Seu recorde: </span>
                    <Record check={current === highest !== 0 ? true : false}>
                        <p>{highest} {highest <= 1 ? "dia" : "dias"}</p>
                    </Record>
                </div>
            </div>

            <ButtonCheck check={check} onClick={doneHabit}>
                <img src={Check} alt="check" />
            </ButtonCheck>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 90vw;
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    margin-bottom: 20px;
    
    h3 {
        font-size: 19px;
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

    @media (max-width:375px) {
        width: 330px;
    }
`

const Record = styled.p`
    font-size: 12px;
    line-height: 1.1;
    color: ${props => props.check ? ("#8FC549") : ("#666666")};
`

const ButtonCheck = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${props => props.check ? ("#8FC549") : ("#EBEBEB")};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: #FFFFFF;
    font-weight: 900;
    cursor: pointer;
`