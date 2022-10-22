import styled from "styled-components";
import LogoIcon from "../../assets/img/logo.png"
import Typography from "../../assets/img/TrackIt.png"

export default function Logo() {
    return (
        <LogoContainer>
            <img className="logo-img" src={LogoIcon} alt="Logo Icon" />
            <img className="logo-text" src={Typography} alt="Track It" />
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    width: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-img {
        width: 180px;
        margin-bottom: 10px;
    }
`