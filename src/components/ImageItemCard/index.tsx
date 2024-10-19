/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

type ImageCardItemProps = {
  data: any;
  isSelected?: boolean;
  style?: React.CSSProperties;
  onClick?: (data: any) => void;
};

const ImageItemCard = ({
  style,
  data,
  isSelected,
  onClick,
}: ImageCardItemProps) => {
  return (
    <div
      style={{
        width: 300,
        objectFit: 'cover',
        margin: '5px 5px',
        cursor: 'pointer',
        borderRadius: 5,
        height: '100%',
        overflow: 'hidden',
        padding: '5px',
        ...style,
        ...(isSelected ? { border: `6px solid blue` } : {}),
      }}
      onClick={() => onClick && onClick(data)}
    >
      <img
        src={data}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default ImageItemCard;
