import React from 'react';

interface Props {
  originalPrice: number;
  salePrice: number | null;
}

const Price = ({ originalPrice, salePrice }: Props) => {
  return (
    <div className='book__price'>
      {salePrice ? (
        <>
          <span className='book__price--normal'>
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
};

export default Price;
