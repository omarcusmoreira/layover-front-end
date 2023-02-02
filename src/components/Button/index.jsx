import { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      onClick={onClickHandler}
      color={'primary'}
      idleText={'Entrar'}
      loadingText={'Loading'}
      successText={'Success'}
      errorText={'Error'}
      type={'button'}
      className={'button'}
      style={{ borderRadius: '20px', width:'15vh', backgroundColor:'darkblue'}}
      outline={false}
      shadow={false}
      rounded={false}
      size={'normal'}
      block={false}
      messageDuration={2000}
      disabled={false}
      buttonRef={null}
      width={null}
      height={null}
      animation={true}
    />
  );
}

export default App;