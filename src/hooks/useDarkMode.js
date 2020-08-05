import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValues) => {
  const [values, setValues] = useLocalStorage("darkmode", initialValues);
  return [values, setValues];
};
