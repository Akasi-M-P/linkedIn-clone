import React, { useState } from "react";

const List = ({ items, maxItems }) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <>
      <ul>
        {items
          .slice(0, showAll ? items.length : maxItems)
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      {!showAll && items.length > maxItems && (
        <button onClick={handleClick}>Show more</button>
      )}
    </>
  );
};

export default List;
