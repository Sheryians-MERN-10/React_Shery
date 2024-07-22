import React, { useState } from 'react'

const _02_Revision = () => {

  const [skills, setSkills] = useState([]);

  const handleSkill = (e) => {
    const value = e.target.value;
    // setSkills(value);

    setSkills((prevSkills) => {
      if (prevSkills.includes(value)) {
        return prevSkills.filter((item) => item !== value);
      } else {
        return [...prevSkills, value];
      }
    })
    
  }

  return (
    <>
      <form action="">

        <div>
          <h1>Skills</h1>

          <label htmlFor="html">
            <input type="checkbox" name="html" id="html" value='HTML' checked={skills.includes('HTML')} onChange={handleSkill} /> HTML
          </label>

          <label htmlFor="css">
            <input type="checkbox" name="css" id="css" value='CSS' checked={skills.includes('CSS')} onChange={handleSkill} /> CSS
          </label>
        </div>
      </form>

      <div>
        <h1>{skills}</h1>
      </div>

    </>
  )
}

export default _02_Revision