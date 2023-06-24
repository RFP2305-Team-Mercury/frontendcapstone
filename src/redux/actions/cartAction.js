import React from 'react';

// Actions are functions that return an object with a 'type' property
export const addToCart = (sku_id) => {
  return {
    type: 'ADD_ITEM'
    payload: sku_id;
  };
};

export const selectSize = () => {
  return {
    type: 'SELECT_SIZE'
  };
};

export const selectQuantity = () => {
  return {
    type: 'SELECT_QUANTITY'
  };
};

export const selectStyle = () => {
  return {
    type: 'SELECT_STYLE'
  };
};