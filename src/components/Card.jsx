import React from 'react'

export default function Card(props) {
  const { animal: { name, lifeExpectancy, description, needsMedicine, image } } = props;
  
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={name} width="100%"/>
      <p>{description}</p>
      <p>This animal will live {lifeExpectancy} years</p>
    </div>
  )
}
