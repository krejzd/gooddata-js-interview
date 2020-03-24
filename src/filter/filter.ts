import {useState} from "react";

export type Control = {
  getValue: (key: any) => any,
  setValue: (key: any, value: any) => void
}

export const useFilter = <T, K extends keyof T>(initialData: T): {control: Control, data: T} => {
  const [data, setData] = useState(initialData);

  const setValue = (key: K, value: any) => {
    setData(prevState => ({
      ...prevState,
      [key]: value
    }))
  };

  const getValue = (key: K) => {
    return data[key];
  };

  return {
    control: {
      setValue,
      getValue
    },
    data
  }
};