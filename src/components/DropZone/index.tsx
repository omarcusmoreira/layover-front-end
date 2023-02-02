import {useCallback,useState} from 'react'
import { useDropzone } from 'react-dropzone'

import { Button } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import './style.css'

export function Dropzone({handleAccepted,photo}:any) {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDropAccepted:handleAccepted});

  const files = acceptedFiles.map(file => (
    <li key={file.webkitRelativePath}>
      {file.webkitRelativePath} - {file.size} bytes
    </li>
  ));

  function onDropHandler(files: any) {      
    var file = files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event.target?.result);
    };
    reader.readAsDataURL(file);
}

  const last = acceptedFiles[acceptedFiles.length - 1]

  if(last) photo(onDropHandler(acceptedFiles))

  return (
    <div >
      {
        <div className='droparea-container' {...getRootProps()}>
          <input {...getInputProps()} />
          <Button >Adicionar foto da Galeria <CameraAltIcon /></Button>
          <span>ou</span>
          <Button>Tirar Foto</Button>
          <div>
            <span>Fotos</span>
            <ul>
              {files}
            </ul>
          </div>
        </div>
      }
    </div>
  )
}