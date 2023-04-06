import React, { useEffect, useState } from 'react'

function Cards() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);
  const pressHandler = (id) => {
    setLimit(limit - 1);
  
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
        
   }  
    
  const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(e => console.log(e.message));
  }, [limit]);
    
  return (
    <div className='userPage'>
        <div id='grid'>
            {data.map(data => (  
                <div className="card" key={data.id}>
                    <div id='removebtn' className={limit<=3? 'hide' : 'show'}>
                        <button onClick={() => pressHandler(data.id)}>x</button>
                    </div>
                    <div className="avatar">
                        <img
                          src= "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          className="card-img-top"
                          alt="user_img"
                        />
                    </div>
                    <div className='userDetails'>
                        <div className='title'>
                            <h5>Name:</h5>
                            <p>{data.name}</p>
                        </div>
                        <div className='title'>
                            <h5>Email:</h5>
                            <p>{data.email}</p>  
                        </div>  
                        <div className='title'>
                            <h5>Address:</h5>
                            <p>{ data.address.city}</p>      
                        </div>  
                    </div>
                </div>  
            ))}        
        </div>
        <div className='btn'>
            <button onClick={() => setLimit(limit+1)}>Add One More Card</button>  
        </div>  
    </div>
  )
}

export default Cards