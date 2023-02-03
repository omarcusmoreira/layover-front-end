import { Select, MenuItem } from "@mui/material";
import { TextFieldWrap, Warning } from "./styles";

interface InputSelectProps {
  callBacks: (e: string) => void;
  value: string;
  placeholder?: string;
  height?: string;
  type?: string;
  children: JSX.Element | JSX.Element[];
}

export function InputSelect({
  children,
  callBacks,
  value,
  height = "56px",
}: InputSelectProps) {

  const stylesInput = {
    display: "flex",
    alignItems: "center",
    height: height,
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "16px",
    padding: "0 14px",
    color: "#000",
  };

  return (
    <TextFieldWrap>
      <Select
        placeholder="Nacionalidade"
        value={value}
        onChange={(e) => callBacks(e.target.value)}
        variant="filled"
        fullWidth
        SelectDisplayProps={{
          style: stylesInput,
        }}

        disableUnderline
      >
        {children}
      </Select>
    </TextFieldWrap>
  );
}
