import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";

export default function Registration() {
    return (
        <RegisterContainer>
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

                <input
                placeholder="nome"
                type="text"
                />

                <input
                placeholder="URL foto"
                type="url"
                />

                <div className="button-login">
                    <button>Cadastrar</button>
                </div>
            </form>

            <Link to="/">
                <h1>Já tem uma conta? Faça login!</h1>
            </Link>
        </RegisterContainer>
    )
}

const RegisterContainer = styled.div`
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