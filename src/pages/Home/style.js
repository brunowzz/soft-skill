import styled from "styled-components";

export const ContainerForm = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 43px;
  height: 100vh;
`;

export const LoginTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

export const BoxFormLogin = styled.form`
  width: 501px;
  height: 404px;
  padding: 2.5rem 2rem;
  border-radius: 0.6rem;
  background: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const FormLoginLabel = styled.label`
  font-size: 20px;
  font-weight: 300;
`;

export const FormLoginInput = styled.input`
  width: 100%;
  height: 47px;
  margin: 17px 0;
  padding: 14px 16px;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 400;
`;

export const FormLoginButtonSubmit = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  margin: 31px 0 24px 0;
  border-radius: 5px;
  background: #007aff;
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextForm = styled.p`
  font-size: 16px;
  font-weight: 500;

  a {
    font-weight: 700;
    color: #007aff;
  }
`;
