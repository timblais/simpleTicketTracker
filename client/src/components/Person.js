import React, { useEffect, useState} from 'react'

const Person = () => {
    
    let [personData, setPersonData] = useState()

    useEffect(() => {
        fetch('/index')
        .then( res => res.json())
        .then(data => {
          console.log(data)
          setPersonData(data.person)
        })
    }, [])

    // const personData = ['John','Jim']
    
    return (
      <div>
         {personData.map((e,i) => {
          return <p>{e}</p>
         })}
      </div>
    )
  }
  
  export default Person