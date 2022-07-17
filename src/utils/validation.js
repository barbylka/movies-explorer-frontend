import React from "react";
import { nameRegExp } from "./configuration";

export const useValidation = (valid) => {
  const [isWrong, setIsWrong] = React.useState(valid);
  const [errorMessage, setErrorMessage] = React.useState("");

  const validateNameInput = (value) => {
    return nameRegExp.test(value);
  }

  const onChange = (evt) => {
    if (!evt.target.validity.valid) {
      setIsWrong(true);
      setErrorMessage(evt.target.validationMessage);
    } else if ((evt.target.id === "name-input") && (validateNameInput(evt.target.value) === false)) {
      setIsWrong(true);
      setErrorMessage("Имя от 2 до 30 знаков и может содержать латиницу, кириллицу, пробел или дефис");
    } else {
      setIsWrong(false);
      setErrorMessage("");
    }
  };

  return {
    isWrong,
    errorMessage,
    onChange
  };
};