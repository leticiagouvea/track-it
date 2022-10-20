import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";

export default function Login() {
    return (
        <LoginContainer>
            <Logo />

            <form>
                <input
                placeholder="email"
                type="text"
                />

                <input
                placeholder="senha"
                type="password"
                />

                <div className="button-login">
                    <button>Entrar</button>
                </div>
            </form>

            <Link to="/cadastro">
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </LoginContainer >
    )
}

const LoginContainer = styled.div`
    width: 100%;
    min-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 375px;

        input {
            margin-bottom: 5px;
        }

        button {
            width: 303px;
            height: 45px;
        }
    }

    h1 {
    margin-top: 20px;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    cursor: pointer;
    }
`