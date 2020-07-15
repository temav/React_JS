import styled from "styled-components";

export const Input = styled.input`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 2px 60px 0px 6px;
  width: 337px;
  height: 39px;
  border-bottom-color: ${(props: any) =>
    props.error ? "red" : "rgba(0, 0, 0, 0.6)"};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-top: none;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  margin-bottom: 0px;
`;
export const ErrorMessage = styled.div`
  font-size: 11px;
  font-style: italic;
  margin: 0px;
  color: darkgray;
  line-height: 17px;
  p {
    margin: 1px;
  }
`;
export const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;
export const PasswordField = styled.div`
  height: 143px;
`;
export const ShowPasswordButton = styled.button`
  background-color: dimgrey;
  margin-bottom: 0;
  margin-left: -53px;
  border: 1px solid rgb(177, 143, 143);
  border-radius: 10%;
  background-size: 34px;
  background-position: center;
  background-image: url(${(props: any) =>
    props.showPassword
      ? "pics/hidden_password.png"
      : "pics/show_password.png"});
  background-repeat: no-repeat;
  background-color: white;
  opacity: 0.5;
  height: 32px;
  width: 50px;
  cursor: pointer;
`;
