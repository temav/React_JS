import styled from "styled-components";
export const Title = styled.div`
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  direction: ltr;
  display: block;
  font-family: "Segoe UI Webfont", -apple-system, "Helvetica Neue",
    "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi, "Segoe Xbox Symbol",
    "Segoe UI Symbol", "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi,
    "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI",
    "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa",
    "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa",
    "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli",
    "Myanmar Text", "Cambria Math";
  font-weight: 300;
  font-size: 1.2rem;
  height: auto;
  line-height: 28px;
  margin-bottom: 16px;
  margin-left: -2px;
  margin-right: -2px;
  margin-top: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 342px;
  background-color: transparent;
  div {
    font-family: "SegoeUI";
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
  }
`;
export const FormHeader = styled.div`
  font-size: 1.4rem;
  font-family: "SegoeUI";
  font-weight: 100;
  margin-bottom: 30px;
`;
export const LoadAnimation = styled.div`
  width: 12px;
  position: relative;
  animation-name: line_;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @keyframes line_ {
    0% {
      background-color: #15425e;
      left: 0px;
      top: 0px;
      height: 10px;
    }
    50% {
      background-color: #8a899a;
      left: 0px;
      top: 0px;
      height: 200px;
    }
    100% {
      background-color: #15425e;
      left: 0px;
      top: 0px;
      height: 10px;
    }
  }
`;
export const Button = styled.button`
  align-items: flex-start;
  border-radius: 3px;
  background-color: rgb(0, 103, 184);
  border-bottom-color: rgb(0, 103, 184);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(0, 103, 184);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 103, 184);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 103, 184);
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  width: 338px;
  height: 36px;
  &:hover {
    background: rgb(0, 85, 152);
    border: 1px solid rgb(0, 85, 152);
  }
`;
