import styled from "styled-components";
export const Input = styled.input`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding-left: 4pt;
  width: 337px;
  height: 36px;
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
  height: 20px;
  font-size: 11px;
  font-style: italic;
  margin: 0px;
  color: darkgray;
  line-height: 17px;
  p {
    margin: 1px;
  }
`;
