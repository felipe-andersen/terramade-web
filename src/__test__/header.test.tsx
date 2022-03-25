import React from 'react';
import { sum } from '../templates/home/header/script';
import { render } from '@testing-library/react';
import { HeaderComponent } from '../templates/home/header';




test("Home -> Header -> component", () => {

  const { getByTestId } = render(
    <HeaderComponent 
      data={{ 
        placeholderSelectedLanguage: "search",
        userPicture: "photo"
      }}
    />)
    expect(getByTestId('formTitle')).toHaveAttribute("title",'Search using voice command, characters or image.')
   
})

