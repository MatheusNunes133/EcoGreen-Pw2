import * as React from 'react';
import Button from '@mui/material/Button';

interface IProps{
  name: string,
  width: any,
  height: any,
  textColor: string,
  backgroundColor?: string
}

function button({name, width, height, textColor, backgroundColor}: IProps) {
  return (
    <div>
      <Button color="success" variant="contained" sx={{
                width: width,
                height: height,
                color: textColor,
                backgroundColor: backgroundColor
            }}>{name}</Button>
    </div>
  );
}

export default button;