import React from 'react';
// import { Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '../../../ui/Avatar';
// import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { windowWrapper } from '../../../hocs/WindowWrapper';
import NewScrollableList from '../../../ui/lists/NewScrollableList';
import ProgressButton from '../../../ui/ProgressButton';
import { getDictionary } from '../../../../utils/LocalStorageHelper';
import styles from '../../../ui/styles';
import Attachment from '../Attachment';
import ModalHeader from '../../../ui/ModalHeader';
// import Attachment from '../Attachment';
// import Avatar from '../../../ui/Avatar';
import { TaskDueDate } from '../../../drawers/chat/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ScrollableContainer from '../../../hocs/ScrollableContainer';
import {
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized/dist/commonjs/CellMeasurer';

import {
  FilesStyled,
  FilesMessageStyled,
  MessageInfo,
  LeftField,
  RightField,
  GeneralField,
  Title,
  ModalWindowStyled,
  MessagePanel,
  ButtonPanel,
  SearchPanel,
  LeftFieldFiles,
  FlexWrapper,
  // LeftWrapper,
  // RightWrapper,
  Delimeter
} from './styles';
const dictionary = getDictionary();
const cache = new CellMeasurerCache({
  defaultHeight: 60,
  minHeight: 60,
  fixedWidth: true
});

const FileRender = props => {
  const { name, guid, handleClick } = props;
  const handleOnClick = () => {
    handleClick(guid);
  };
  return (
    <Attachment
      key={guid}
      bottomSpacing={0}
      // markedForDeletion={isMarkedForDeletion}
      attachment={{ name }}
      onAttachmentClick={handleOnClick}
      // actions={actions}
    />
  );
};
const CustomFilesMessage = props => {
  const {
    authorName,
    attachments,
    handleSelect,
    date,
    searchFlag,
    filtered,
    avatar,
    message,
    style
  } = props;
  return (
    <>
      <FilesMessageStyled style={style}>
        <MessageInfo search={searchFlag} filtered={filtered}>
          {/* {authorName && (
          <>
            <span>{authorName}</span>
            <span>{date}</span>
          </>
        )} */}
          {
            <>
              <ListItem
                onClick={handleSelect}
                // className={classes.assignToPerson}
              >
                <ListItemAvatar>
                  <Avatar avatar={avatar} />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <>
                      <div>{authorName}</div>
                    </>
                  }
                  secondary={
                    <>
                      {dictionary['Date']}: {date}
                    </>
                  }
                />
              </ListItem>
            </>
          }
        </MessageInfo>
        <div>{message}</div>
        <div>
          {attachments &&
            attachments.map((item, index) => (
              <FileRender
                handleClick={handleSelect}
                searchFlag={searchFlag}
                {...item}
                key={index}
              />
            ))}
        </div>
      </FilesMessageStyled>
      <Delimeter />
    </>
  );
};
class ModalFileSelector extends React.Component {
  state = {
    defaultFiles: [],
    selectedFiles: [],
    filteredRows: [],
    selectedRows: [],
    searchFlag: false
  };
  componentDidMount = () => {
    const { options } = this.props;
    this.setState({
      selectedFiles: options,
      defaultFiles: options,
      filteredRows: options,
      selectedRows: options
        .map(item => item.attachments.filter(elem => elem.selected))
        .filter(item => item.length)
        .flat()
    });
  };
  handleAddSelectedProp = option => {
    return option.map(item => ({
      ...item,
      attachments: item.attachments.map(element => ({
        ...element,
        selected: false
      }))
    }));
  };
  handleClearFilter = files => {
    let defFiles = files;
    defFiles.forEach(option => {
      option.filtered = true;
      option.attachments.forEach(attach => (attach.filtered = true));
    });
    return defFiles;
  };
  handleSelectFiles = guid => {
    const { selectedFiles } = this.state;
    let fileToSelect = selectedFiles;

    fileToSelect.forEach(item =>
      item.attachments.forEach(elem => {
        if (elem.guid === guid) elem.selected = !elem.selected;
      })
    );
    this.setState({
      selectedFiles: fileToSelect,
      selectedRows: fileToSelect
        .map(item => item.attachments.filter(elem => elem.selected))
        .filter(item => item.length)
        .flat()
    });
  };
  handleApply = () => {
    const { applyChanges, inputName, isOpenWindowControl } = this.props;
    const { selectedFiles, defaultFiles } = this.state;
    const filesToApply = selectedFiles
      .map(item => item.attachments.filter(elem => elem.selected))
      .flat()
      .map(item => item.guid);
    applyChanges(inputName, filesToApply, selectedFiles);
    isOpenWindowControl();
    let filteredFiles = this.handleClearFilter(defaultFiles);
    this.setState({ selectedFiles: filteredFiles });
  };
  handleSearchOnChange = e => {
    const {
      state: { selectedFiles, defaultFiles },
      handleClearFilter
    } = this;

    const search = e.target.value;
    let filteredFiles = selectedFiles;
    if (search && search.length) {
      this.setState({ searchFlag: true });
      filteredFiles.forEach(option => {
        let conditionName = ~option.authorName
          .toLowerCase()
          .indexOf(search.toLowerCase());
        let conditionAttach = option.attachments.filter(attach => {
          if (~attach.name.toLowerCase().indexOf(search.toLowerCase())) {
            return (attach.filtered = true);
          } else {
            return (attach.filtered = false);
          }
        }).length;
        if (conditionAttach || conditionName) {
          option.filtered = true;
        } else {
          option.filtered = false;
        }
      });
    } else {
      this.setState({ searchFlag: false });
      filteredFiles = handleClearFilter(defaultFiles);
    }
    this.setState({ selectedFiles: filteredFiles });
    this.setState({
      filteredRows: filteredFiles.filter(
        item =>
          item.attachments.filter(attach => attach.filtered).length ||
          item.filtered
      )
    });
  };

  render() {
    const {
      isOpenWindowControl,
      classes,
      disabled,
      progressButtonCondition,
      okText
    } = this.props;
    const {
      state: { filteredRows, selectedRows },
      handleSearchOnChange,
      handleApply
    } = this;
    // const getRowHeightRight = ({ index }) => {
    //   const { filteredRows } = this.state;
    //   const option = filteredRows[index];
    //   const attachLength = option.attachments.length;
    //   const messageInfoHeight = 34;
    //   const attachHeight = 35;
    //   return (
    //     messageInfoHeight +
    //     (attachLength * attachHeight + 5 * (attachLength + 1)) +
    //     15
    //   );
    // };

    const SelectedListRender = () => {
      const {
        state: { searchFlag, selectedRows },
        handleSelectFiles
      } = this;
      // const option = selectedRows[index];
      return selectedRows.map((option, index) => (
        <FileRender
          left={true}
          handleClick={handleSelectFiles}
          {...option}
          searchFlag={searchFlag}
          key={index}
        />
      ));
    };

    const rowRendererRight = ({ index, style, parent }) => {
      const {
        state: { searchFlag, filteredRows },
        handleSelectFiles
      } = this;

      const option = filteredRows[index];
      if (
        option.attachments.filter(attach => attach.filtered).length ||
        option.filtered
      )
        return (
          <CellMeasurer
            key={index}
            cache={cache}
            parent={parent}
            columnIndex={0}
            rowIndex={index}
          >
            {({ measure }) => (
              <CustomFilesMessage
                handleSelect={handleSelectFiles}
                key={index}
                style={style}
                searchFlag={searchFlag}
                measure={measure}
                {...option}
              />
            )}
          </CellMeasurer>
        );
    };
    // const getRowHeightLeft = ({ index }) => {
    //   const { selectedRows } = this.state;
    //   const attachHeight = 40;
    //   return attachHeight;
    // };
    const listPropsRight = {
      cache: cache,
      // rowHeight: 200, //this.getRowHeightRight,
      rowCount: filteredRows.length,
      rowRenderer: rowRendererRight
    };
    // const listPropsLeft = {
    //   rowHeight: 40,
    //   rowCount: selectedRows.length,
    //   rowRenderer: rowRendererLeft
    // };
    return (
      <ModalWindowStyled>
        <ModalHeader
          title="Файлы отчета для согласования"
          modalCloseHandler={isOpenWindowControl}
        />
        <GeneralField>
          <FlexWrapper>
            <Title>Selected</Title>
            <LeftField>
              <LeftFieldFiles>
                <ScrollableContainer>
                  {SelectedListRender()}
                </ScrollableContainer>
                {/* <NewScrollableList {...listPropsLeft} /> */}
              </LeftFieldFiles>
            </LeftField>
          </FlexWrapper>
          <FlexWrapper>
            <Title>Files</Title>

            <RightField>
              <SearchPanel>
                <TextField
                  className={classes.search}
                  name="search"
                  placeholder="Search"
                  autoFocus
                  onChange={handleSearchOnChange}
                />
              </SearchPanel>

              <MessagePanel>
                <NewScrollableList {...listPropsRight} />
              </MessagePanel>
            </RightField>
          </FlexWrapper>
        </GeneralField>
        <ButtonPanel>
          <Button
            disabled={disabled}
            color="primary"
            variant="flat"
            onClick={isOpenWindowControl}
            className={classes.button}
          >
            {dictionary['Cancel']}
          </Button>
          <ProgressButton
            condition={progressButtonCondition}
            disabled={disabled}
            variant="contained"
            color="primary"
            onClick={handleApply}
            className={classes.button}
          >
            {okText}
          </ProgressButton>
        </ButtonPanel>
      </ModalWindowStyled>
    );
  }
}

ModalFileSelector.defaultProps = {
  okText: 'OK',
  progressButtonCondition: false
};

export default withStyles(styles)(windowWrapper()(ModalFileSelector));
