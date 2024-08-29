import React, { useState } from 'react';

function HashSetExample() {
  // State to hold the hash set
  const [hashSet, setHashSet] = useState({});

  // Function to add value to the hash set
  const addToHashSet = (value) => {
    setHashSet(prevHashSet => ({
      ...prevHashSet,
      [value]: true
    }));
  };

  // Function to check if value exists in the hash set
  const containsValue = (value) => {
    debugger
    return hashSet[value] !== undefined;
  };

  // Function to remove value from the hash set
  const removeFromHashSet = (value) => {
    debugger
    setHashSet(prevHashSet => {
      const updatedHashSet = { ...prevHashSet };
      delete updatedHashSet[value];
      return updatedHashSet;
    });
  };

  // Example usage
  addToHashSet('apple');
  addToHashSet('banana');

  console.log(containsValue('apple')); // Output: true

  removeFromHashSet('banana');

  console.log(hashSet); // Output: { "apple": true }

  return (
    <div>
      <h2>Hash Set Example</h2>
      {/* <p>Contains "apple": {containsValue('apple') ? 'Yes' : 'No'}</p> */}
      <p>Contains "Mango": {containsValue('apple') ? 'yes' : 'No'}</p>
    </div>
  );
}

export default HashSetExample;
