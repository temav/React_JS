import React, { useState, useMemo } from 'react';
import { connect } from 'redux';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { RequiredMark } from '../commonStyles';
import { InputAdornment, IconButton } from '@material-ui/core';
import FileSelectorWindow from './FileSelectorWindow';
import TextField from '@material-ui/core/TextField';
import { getDictionary } from '../../../../utils/LocalStorageHelper';
import { INPUT_LABEL_PROPS } from '../../../../assets/AppConst';
// import { from } from 'core-js/fn/array';
import { getRequestMessages } from '../../../../reducers/request/messages/getters';

const dictionary = getDictionary();

const IconButton20px = styled(IconButton)`
  font-size: 24px !important;
  font-weight: 300;
`;

const fileSelector = props => {
  const {
    input: { name, value, ...restInput },
    meta,
    noErrorMessage,
    // children,
    // options,
    // withSearch,
    // withTags,
    // initialTags,
    // valueKey,
    label,
    isRequired,
    ...rest
  } = props;
  const defaultRenderValue = values => {
    return `${dictionary['Selected']}: ${values.length}`;
  };
  return (
    <TextField
      {...rest}
      name={name}
      label={
        label ? (
          <span>
            {label}
            {isRequired && <RequiredMark>*</RequiredMark>}
          </span>
        ) : (
          undefined
        )
      }
      helperText={meta.touched && !noErrorMessage ? meta.error : undefined}
      error={meta.error && meta.touched}
      // inputProps={restInput}
      value={`${dictionary['Selected']}: ${value.length}`}
      SelectProps={{
        displayEmpty: true,
        renderValue: defaultRenderValue,
        ...rest.SelectProps
      }}
    />
  );
};
const getInputPropsForField = isOpenWindowControl => ({
  readOnly: true,
  endAdornment: (
    <InputAdornment position="end">
      <IconButton20px onClick={isOpenWindowControl}>
        <i className="fal fa-file-plus" />
      </IconButton20px>
    </InputAdornment>
  )
});

const getFieldArgs = (isOpenWindowControl, inputName, { label, required }) => ({
  inputProps: getInputPropsForField(isOpenWindowControl),
  inputName,
  label,
  required
});

const renderField = ({ inputProps, inputName, label, required }) => {
  return (
    <Field
      fullWidth
      name={inputName}
      component={fileSelector}
      type="text"
      InputLabelProps={INPUT_LABEL_PROPS}
      InputProps={inputProps}
      label={label}
      isRequired={required}
    />
  );
};

const FileSelectField = ({
  field: { options, inputName, title, ...restProps },
  changeAssignToField
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const defaultOptions = options.map(item => ({
    ...item,
    attachments: item.attachments.map(element => ({
      ...element,
      selected: false,
      filtered: true
    })),
    filtered: true
  }));

  const [storedFiles, setStoredFiles] = useState([]);

  const isOpenWindowControl = () => {
    setIsOpened(!isOpened);
  };

  const changeSelectedFiles = (inputName, filesToApply, selectedFiles = []) => {
    changeAssignToField(inputName, filesToApply);
    setStoredFiles(selectedFiles);
  };

  const fieldArgs = getFieldArgs(isOpenWindowControl, inputName, restProps);

  return (
    <>
      {isOpened && (
        <FileSelectorWindow
          isOpenWindowControl={isOpenWindowControl}
          options={storedFiles.length ? storedFiles : defaultOptions}
          inputName={inputName}
          applyChanges={changeSelectedFiles}
          title={title}
        />
      )}
      {renderField(fieldArgs)}
    </>
  );
};

export default FileSelectField;
