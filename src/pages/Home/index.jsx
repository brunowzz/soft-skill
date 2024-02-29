import { useState } from "react";

import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as S from "./style";

export default function Home() {
  const [login, setLogin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!e) {
        return;
      }

      toast("✅ Usuário logado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      setLogin(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {!login && (
        <S.ContainerForm>
          <S.LoginTitle>Login</S.LoginTitle>

          <S.BoxFormLogin onSubmit={handleSubmit}>
            <S.FormLoginLabel htmlFor="email">Email:</S.FormLoginLabel>
            <S.FormLoginInput type="email" name="email" required />

            <S.FormLoginLabel htmlFor="password">Senha:</S.FormLoginLabel>
            <S.FormLoginInput type="password" name="password" required />

            <S.FormLoginButtonSubmit type="submit">
              Entrar
            </S.FormLoginButtonSubmit>

            <S.TextForm>
              Não tem uma conta? <a href="#"> Clique aqui.</a>
            </S.TextForm>
          </S.BoxFormLogin>
        </S.ContainerForm>
      )}

      {login && (
        <>
          <h1>Usuário logado com sucesso</h1>
        </>
      )}
    </>
  );
}
