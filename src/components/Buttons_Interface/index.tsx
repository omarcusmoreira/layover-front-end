import Button from '@mui/material/Button';
import './style.css';

export default function ButtonsInterface() {
  return (
    <div className='buttons'>
        <Button id='back'>Voltar</Button>
        <Button id='advance'>Avançar</Button>
    </div>
  );
}
