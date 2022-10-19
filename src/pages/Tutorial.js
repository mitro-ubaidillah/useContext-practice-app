import React from 'react';
import Posts from '../components/Posts';
import LocaleContext from '../context/LocaleContext';

function Tutorial() {
  const {locale} = React.useContext(LocaleContext);
  return (
    <>
      <h1>Tutorial</h1>
      <Posts locale={locale} />
    </>
  );
}

export default Tutorial;
