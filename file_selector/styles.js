import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const ModalWindowStyled = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const MessagePanel = styled.div`
  height: 400px;
  padding: 8px 4px 8px 0;
`;
export const ButtonPanel = styled.div`
  width: 200px;
  align-self: flex-end;
`;
export const RightField = styled.div`
  width: 100%;
  height: 475px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  border: 1px solid beige;
`;
export const LeftField = styled.div`
  flex-shrink: 0;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  border: 1px solid beige;
`;
export const LeftFieldFiles = styled.div`
  padding: 8px 4px 8px 0;
  height: 460px;
`;
export const FilesMessageStyled = styled.div`
  margin: 15px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  word-wrap: break-word;
  max-width: 100%;
  width: auto;
  background-color: #fff;
  border-radius: 3px;
  font-size: 0.975rem;
`;
export const MessageInfo = styled.div`
  border-bottom: 3px solid #c5c1c1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const Delimeter = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

export const GeneralField = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin-bottom: 15px;
  &:first-child {
    flex-grow: 1;
  }
  &:last-child {
    flex-grow: 2;
  }
`;
export const Title = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: auto;
  height: 24px;
  overflow: hidden;
  font-size: 13px;
  box-sizing: content-box;
  font-weight: 200;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  white-space: nowrap;
  padding: 0 0 5px 0;
  text-overflow: ellipsis;
`;
export const FilesStyled = styled.div`
  background-color: ${props =>
    props.filtered && props.searchFlag ? '#9bddb9' : '#eaeaea'};
  background-color: ${props => props.selected && '#27508a'};
  color: ${props => (props.selected ? 'white' : 'black')};
  margin: ${props => (props.left ? '5px 11px 5px 11px' : '5px 5px 5px 5px')};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${props => (props.selected ? '#eaeaea' : '#193152')};
    color: ${props => (props.selected ? 'black' : 'white')};
  }
`;
export const SearchPanel = styled.div``;
