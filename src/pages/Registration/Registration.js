import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../../service/trackItService";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Logo from "../components/Logo";

export default function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function EnviarInfos(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            email,
            password,
            name,
            image
        }
    
        postRegister(body)
        .then((res) => {
            navigate("/");
            setLoading(false);
        })
        .catch((res) => {
            alert(`Algo deu errado. ${res.response.status - res.response.data}`);
            setLoading(false);
        })
    }

    return (
        <RegisterContainer>
            <Logo />

            <form onSubmit={EnviarInfos}>
                <div className="input-signup">
                    <input data-identifier="input-email"
                        placeholder="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        disabled={loading}
                    />
                </div>

                <div className="input-signup">
                    <input data-identifier="input-password"
                        placeholder="senha"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        disabled={loading}
                    />
                </div>

                <div className="input-signup">
                    <input data-identifier="input-name"
                        placeholder="nome"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        disabled={loading}
                    />
                </div>

                <div className="input-signup">
                    <input data-identifier="input-photo"
                        placeholder="URL foto"
                        type="url"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        required
                        disabled={loading}
                    />
                </div>

                <div className="button-login">
                    <button type="submit" disabled={loading}>
                        {loading ?
                            (<ThreeDots color="#ffffff" height={50} width={50} />) :
                            ("Cadastrar")}
                    </button>
                </div>
            </form>

            <Link to="/">
                <h1 data-identifier="back-to-login-action">Já tem uma conta? Faça login!</h1>
            </Link>
        </RegisterContainer>
    )
}

const RegisterContainer = styled.div`
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
            &:disabled {
            opacity: 0.7;
            cursor: default;
            }
        }
    }

    h1 {
    margin-top: 20px;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    }
`