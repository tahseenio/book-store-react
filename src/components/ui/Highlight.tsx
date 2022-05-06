import React from 'react';

interface Props {
  icon: JSX.Element;
  title: string;
  para: string;
}

const Highlight = ({ icon, title, para }: Props) => {
  return (
    <div className='highlight'>
      <div className='highlight__img'>{icon}</div>
      <h3 className='highlight__subtitle'>{title}</h3>
      <p className='highlight__para'>{para}</p>
    </div>
  );
};

export default Highlight;
