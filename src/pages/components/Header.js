import styled from "styled-components";
import TypographyWhite from "../../assets/img/TrackItWhite.png";

export default function Header() {

    return (
        <HeaderContainer>
            <img src={TypographyWhite} alt="Track It" />
            <img data-identifier="avatar" className="profile-pic" src={JSON.parse(localStorage.getItem("image"))} alt="Profile" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100vw;
    height: 72px;
    padding: 0px 20px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    .profile-pic {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    }
`