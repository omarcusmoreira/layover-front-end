
import {TextField } from "@mui/material";
import { 
  TextFieldWrap,
  Warning,
} from "./styles";


interface InputDateProps {
  callBacks: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void
  value:string
  label?:string
  placeholder?:string
  height?:string
  type?:string
  warningMns?:string
}

export function InputDate({callBacks, type, label, value, placeholder, height="52px", warningMns}: InputDateProps) {
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
        onChange={(e) => callBacks(e)}
        type="date"
        label={label}
        value={value}
        variant="filled"
        datatype="DD/MM/AAAA"
        placeholder={placeholder}
        fullWidth
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
