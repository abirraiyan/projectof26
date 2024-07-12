import React from 'react'

export const Card = ({userInfo}) => {
  const {firstname,university,image } =userInfo;
   
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
  
  <div className="avatar flex justify-center">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src={image}/>
  </div>
</div>
 
  <div className="card-body">
    <h2 className="card-title">{firstname}</h2>
    <p>{university}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">More Details</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
