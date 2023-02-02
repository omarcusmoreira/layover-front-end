
import {TextField } from "@mui/material";
import { 
  TextFieldWrap,
  Warning,
} from "./styles";


interface InputTextProps {
  callBacks: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void
  value:string
  label?:string
  placeholder?:string
  height?:string
  type?:string
  warningMns?:string
}

export function InputText({callBacks, type, label, value, placeholder, height="52px", warningMns}: InputTextProps) {
  const stylesInput = {
    height: height,
    fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "16px",
    color:"#000",
  };
  return (
    <TextFieldWrap>

      <TextField
        value={value}
        onChange={e => callBacks(e)}
        type={type}
        label={label}
        variant="filled"
        fullWidth
        placeholder={placeholder}
        InputProps={{
          style: stylesInput,
          disableUnderline: true,
        }}
        InputLabelProps={{ 
          shrink: false 
        }}
      />
      <Warning>{warningMns}</Warning>
    </TextFieldWrap>


  );
}
