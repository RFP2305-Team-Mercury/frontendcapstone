import React, { useState, useEffect } from 'react';

const FormCharacteristics = ({characteristic, handleRateCharacter}) => {
  const [rating, setRating] = useState(0);
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    switch (characteristic) {
      case 'Size':
        setMeanings(['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide']);
        break;
      case 'Width':
        setMeanings(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']);
        break;
      case 'Comfort':
        setMeanings(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']);
        break;
      case 'Quality':
        setMeanings(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']);
        break;
      case 'Length':
        setMeanings(['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']);
        break;
      case 'Fit':
        setMeanings(['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']);
        break;
    }
  }, [])

  return (
    <div className="py-4">
      <div className="underline">{characteristic}</div>
      <div>
        <div className="text-center text-sm font-light">{rating ? meanings[rating - 1] : 'None Selected'}</div>
        <div className="flex justify-between my-1">
          <input name={characteristic} type="radio" value="1" onClick={(event) => {
              setRating(1);
              handleRateCharacter(characteristic.toLowerCase(), 1);
            }} />
          <input name={characteristic} type="radio" value="2" onClick={(event) => {
              setRating(2);
              handleRateCharacter(characteristic.toLowerCase(), 2);
            }} />
          <input name={characteristic} type="radio" value="3" onClick={(event) => {
              setRating(3);
              handleRateCharacter(characteristic.toLowerCase(), 3);
            }} />
          <input name={characteristic} type="radio" value="4" onClick={(event) => {
              setRating(4);
              handleRateCharacter(characteristic.toLowerCase(), 4);
            }} />
          <input name={characteristic} type="radio" value="5" onClick={(event) => {
              setRating(5);
              handleRateCharacter(characteristic.toLowerCase(), 5);
            }} />
        </div>
        <div className="flex justify-between text-sm font-light">
          <label>{meanings[0]}</label>
          <label>{meanings[4]}</label>
        </div>
      </div>
    </div>
  )
};

export default FormCharacteristics;