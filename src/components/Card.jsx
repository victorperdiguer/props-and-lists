import React, { useState } from 'react'

export default function Card(props) {
  const { animal: { name, lifeExpectancy, description, needsMedicine, image } } = props;
  
  return (
    <div className="card">
      <h3>{name}</h3>
      {image ? <img src={image} alt={name} width="100%" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/2067px-Dog_silhouette.svg.png" alt={name} width="100%"/>}
      <p>{description}</p>
      <p>This animal will live {lifeExpectancy} years</p>
      {needsMedicine && <p className='red-color'>This animal needs medicine</p>}
    </div>
  )
}
