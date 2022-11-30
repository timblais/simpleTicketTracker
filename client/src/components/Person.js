import React, { useEffect, useState} from 'react'

const Person = () => {
    
    const [personData, setPersonData] = useState()

    useEffect(() => {
        fetch('/index')
        .then( res => res.json())
        .then(data => setPersonData(data))
    }, [])
    
    return (
      <div>
         {personData.map((e,i) => {
          <p>{e}</p>
         })}
      </div>
    )
  }
  
  export default Person