import React from "react";

export default function Styles() {
  const styles = ['test1', 'test2'];

  return (
    <div>
      <h2> Style - Selected Style</h2>
      {styles.map((style) => {
        console.log(style); //add conditional rendering to display with checkbox if selected
      })}
    </div>
  );
}
