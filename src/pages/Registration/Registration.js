import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import { postRegister } from "../../service/trackItService";

export default function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    function EnviarInfos(e) {
        e.preventDefault()

        const body = {
            email,
            password,
            name,
            image
        }
    
        postRegister(body)
        .then((res) => {
            console.log(res.data)
            navigate("/")
        })
        .catch((res) => {
            alert(`Algo deu errado. ${res.response.status - res.response.data}`)
        })
    }

    return (
        <RegisterContainer>
            <Logo />

            <form onSubmit={EnviarInfos}>
                <div className="input-signup">
                    <input
                        placeholder="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className="input-signup">
                    <input
                        placeholder="senha"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <div className="input-signup">
                    <input
                        placeholder="nome"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>

                <div className="input-signup">
                    <input
                        placeholder="URL foto"
                        type="url"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        required
                    />
                </div>

                
                <div className="button-login">
                    <button type="submit">Cadastrar</button>
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