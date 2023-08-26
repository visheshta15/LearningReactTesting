import React from 'react'

function Application() {
  return (
    <div>
        <h1>Job application form</h1>
        <h2>Section 1</h2>
        <p>I am visheshta kushwaha</p>
        <div>I am visheshta kushwaha</div>
        <span title='close'>X</span>
        <div data-testid="custom-element">
            Custom Html element
        </div>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" placeholder='fullname' value='aman' onChange={()=>{}}/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <input type="text" name="" id="bio" placeholder='your description' />
            </div>
            <div>
                <input type="text" id='age' alt='a person above 30'/>
                <img src="https://www.w3schools.com/w3images/coffeehouse2.jpg" height="100" alt="a cup of coffee" />
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="10">
                    aman singh
                </textarea>
                
            </div>
            <div>
                <label htmlFor="job-location">Name</label>
                <select name="" id="job-location" >
                    <option value="">Select a Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option selected value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id='terms' />    I agree to the terms and conditions
                </label>
            </div>
            <button aria-pressed='true'>Submit</button>
        </form>
    </div>
  )
}

export default Application