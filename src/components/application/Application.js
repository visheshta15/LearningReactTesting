import React from 'react'

function Application() {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" />
            </div>
            <div>
                <label htmlFor="job-loaction">Job Location</label>
                <select name="" id="job-location">
                    <option value="">Select a Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id='terms' /> I agree to the terms and conditions
                </label>
            </div>
        </form>
    </div>
  )
}

export default Application