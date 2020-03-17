import React from 'react';
const AppartmentInputs = props => {
  return props.cats.map((val, idx) => {
    let appartmentId = `cat-${idx}`,
      ageId = `age-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={appartmentId}>{`Appartment #${idx + 1}`}</label>
        <input
          type="text"
          name={appartmentId}
          data-id={idx}
          id={appartmentId}
          value={props.appartment[idx].name}
          className="name"
        />
        <label htmlFor={ageId}>Age</label>
        <input
          type="text"
          name={ageId}
          data-id={idx}
          id={ageId}
          value={props.cats[idx].age}
          className="age"
        />
      </div>
    );
  });
};
export default CatInputs;
