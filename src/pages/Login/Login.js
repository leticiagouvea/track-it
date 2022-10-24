import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Logo from "../components/Logo";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            email,
            password
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        promise.then((res) => {
            localStorage.setItem("image", JSON.stringify(res.data.image));
            localStorage.setItem("token", JSON.stringify(res.data.token));
            navigate("/hoje");
            setLoading(false);
        })

        promise.catch((err) => {
            alert("Dados incorretos. Tente novamente.");
            resetForm();
            setLoading(false);
        })

        function resetForm() {
            setEmail("");
            setPassword("");
        }
    }

    return (
        <LoginContainer>
            <Logo />

            <form onSubmit={sendData}>
                <input data-identifier="input-email"
                    placeholder="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    disabled={loading}
                />

                <input data-identifier="input-password"
                    placeholder="senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    disabled={loading}
                />

                <div className="button-login">
                    <button disabled={loading} data-identifier="login-btn">
                        {loading ?
                            (<ThreeDots color="#ffffff" height={50} width={50} />) :
                            ("Entrar")}
                    </button>
                </div>
            </form>

            <Link to="/cadastro">
                <h1 data-identifier="sign-up-action">Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    width: 100%;
    min-width: 375px;
    padding-bottom: 70px;
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
    }
`