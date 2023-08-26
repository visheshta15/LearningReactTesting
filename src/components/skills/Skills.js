import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Skills(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const langSkills = props.langSkills
    // console.log(props, langSkills)
    
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(!isLoggedIn)
        }, 1000)
        // if(isLoggedIn){setTimeout(()=>{
        //     setIsLoggedIn(false) 
        // }, 0)}
    }, [])
    // }, [isLoggedIn])
  return (
    <div> 
        {!isLoggedIn ? 
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        :
        <button >Logout</button>
        }
        {isLoggedIn && <p>{"user logged in : Visheshta"}</p>}
        <ul>
            {langSkills && langSkills.map((ele, index)=> <li key={index}>{ele}</li>)}
        </ul>
    </div>
  )
}

export default Skills

Skills.propTypes = {
    langSkills : PropTypes.array
}

Skills.defaultProps = {
    langSkills : ['java', '.net', 'python']
}