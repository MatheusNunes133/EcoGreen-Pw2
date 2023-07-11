import * as React from 'react';
import Button from '@mui/material/Button';

interface IProps{
  name: string
}

function button({name}: IProps) {
  return (
    <div>
      <Button color="success" variant="contained">{name}</Button>
    </div>
  );
}

export default button;