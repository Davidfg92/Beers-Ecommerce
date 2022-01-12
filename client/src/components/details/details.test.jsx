/* eslint-disable key-spacing */
import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Details from './details';

describe('Given a Details component', () => {
  describe('When is rendered with beer data', () => {
    const initialState = {
      beer: [{
        _id:'123',
        name: 'mahou',
        stock: 123,
        price: 2,
      }],
    };
    beforeEach(() => {
      render(<Details />, initialState);
    });

    test('Then Cervezas should be in the document', () => {
      expect(screen.getByText('Origen')).toBeInTheDocument();
    });
  });
});
