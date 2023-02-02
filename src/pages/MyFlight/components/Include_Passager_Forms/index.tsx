import DeleteIcon from '@mui/icons-material/Delete';
import InputMask from "react-input-mask";
import { red } from '@mui/material/colors';
import { useState } from 'react';

export default function IncludePassagerForms ({RemovePassagerIndex, index}: any) {

  const [name, setName]= useState('');
  const [cpf, setCpf]= useState('');
  const [fone, setFone]= useState('');
  const [voo, setVoo]= useState('');

    const InputTel = (props: any) => (
        <InputMask mask="+99 99 99999-9999" value={props.value} onChange={props.onChange}  className='document' type="text" placeholder='Telefone - Ex: +55 11 9999-9999' />
      );

      const InputCPF = (props: any) => (
        <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange}  className='document' type="text" placeholder='CPF - Ex: 123.456.789.12'/>
      );

    return (

      <ul>
            
            <div className='form-include'>
                <div>
                    <p>Passageiro {index+1} </p>
                    <button className='button_icon' type='button' onClick={()=>RemovePassagerIndex(index)}><DeleteIcon sx={{ color: red[500] }}/></button>
                </div>

                <InputMask value={name} onChange={(e: any) => setName(e.target.value)} className='name' type="text" placeholder='Nome completo' mask={'test'} />
                <InputCPF value={cpf} onChange={(e: any) => setCpf(e.target.value)}/>
                <InputTel value={fone} onChange={(e: any) => setFone(e.target.value)}/>
                <InputMask value={voo} onChange={(e: any) => setVoo(e.target.value)} className='document' type="text" placeholder='Nº de voo' mask={'test'} />
                
            
        </div> 

        </ul>

        )
    }