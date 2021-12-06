import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word

// Mapiramo svako slovo iz selektovane reči, da proverimo da li se nalazi unutar correctLetters niza, 
// i ako jeste želimo da prikažemo letter u ovom <spanu>, ako nije želimo da bude prazno.