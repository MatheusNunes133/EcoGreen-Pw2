import * as React from 'react';
import Button from '@mui/material/Button';

interface IProps{
  name: string,
  width: any,
  height: any
}

function button({name, width, height}: IProps) {
  return (
    <div>
      <Button color="success" variant="contained" sx={{
                width: width,
                height: height
            }}>{name}</Button>
    </div>
  );
}

export default button;