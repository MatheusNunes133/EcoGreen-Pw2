import * as React from 'react';
import "./card.css"

interface IProps{
  width: any,
  height: any,
  image: string,
  text: string,
  widthImage: any
}

function card({width, height, text, image, widthImage}: IProps) {
  return (
    <>
        <div style={{
                width: width,
                height: height
            }} className='card'>
            <div style={{
                    width: widthImage,
                    height: height,
                    backgroundImage: `url(${image})`
                }} className='div-imagem'>
                
            </div>
            <div className='div-content'>
                {text}
            </div>
        </div>
    </>
  );
}

export default card;