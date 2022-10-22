import { Link } from "react-router-dom";
import styled from "styled-components";
import TypographyWhite from "../../assets/img/TrackItWhite.png";

export default function Header() {
    console.log(JSON.parse(localStorage.getItem("image")))

    return (
        <HeaderContainer>
            <Link to="/">
                <img src={TypographyWhite} alt="Track It" />
            </Link>
            <img className="profile-pic" src={JSON.parse(localStorage.getItem("image"))} alt="Profile" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    min-width: 375px;
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
    margin: 0 auto;

    .profile-pic {
    height: 50px;
    width: 50px;
    border-radius: 50px;
    object-fit: cover;
    }

    @media (max-width: 375px) {
        width: 100vw;
    }
`