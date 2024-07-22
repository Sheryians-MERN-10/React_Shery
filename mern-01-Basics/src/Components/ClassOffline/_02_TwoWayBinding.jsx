import React, { Fragment, useState, useEffect } from 'react'

import '../../stylesheets/_02_style.css';

const _02_TwoWayBinding = () => {
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    const [skills, setSkills] = useState([]);

    const [users, setUsers] = useState([]);

    const handleSkill = (e) => {
        const value = e.target.value;

        setSkills((prevSkills) => {
            // prevSkills is the current state value before the update
            if (prevSkills.includes(value)) {
                // If the skill is already in the array, remove it
                return prevSkills.filter(item => item !== value);
            } else {
                // If the skill is not in the array, add it
                return [...prevSkills, value];
            }
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let newUser = { username, gender, skills }

        // const skillsElem = document.querySelectorAll("input[name='skills']:checked");
        // console.log(skillsElem);

        // let copyUsers = [...users];
        // copyUsers.push(newUser);
        // setUsers(copyUsers);

        setUsers([...users, newUser]);

        setUsername("");
        setGender("");
        setSkills([]);
    }
    console.log(users);

    return (
        <Fragment>
            <form onSubmit={submitHandler} className="form-container">
                <h1 className="form-title">React Form</h1>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder="Username..." required
                        className="form-input" />
                </div>
                <div className="radio-group">
                    <span className="block text-gray-700 font-medium mb-2">Gender</span>
                    <label htmlFor="male" className="radio-label">
                        <input type="radio" name="gender" id="male" checked={gender === 'male'} onChange={() => setGender('male')} required
                            className="radio-input" /> Male
                    </label>
                    <label htmlFor="female" className="radio-label">
                        <input type="radio" name="gender" id="female" checked={gender === 'female'} onChange={() => setGender('female')} required
                            className="radio-input" /> Female
                    </label>
                </div>
                <div className="checkbox-group">
                    <h2 className="text-xl font-semibold mb-3">Skills</h2>
                    <div className="flex gap-4">
                        <label htmlFor="html" className="checkbox-label">
                            <input type="checkbox" name="skills" id="html" value="HTML" checked={skills.includes('HTML')} onChange={handleSkill}
                                className="checkbox-input" /> HTML
                        </label>
                        <label htmlFor="css" className="checkbox-label">
                            <input type="checkbox" name="skills" id="css" value="CSS" checked={skills.includes('CSS')} onChange={handleSkill}
                                className="checkbox-input" /> CSS
                        </label>
                        <label htmlFor="js" className="checkbox-label">
                            <input type="checkbox" name="skills" id="js" value="JS" checked={skills.includes('JS')} onChange={handleSkill}
                                className="checkbox-input" /> JS
                        </label>
                        <label htmlFor="mongo" className="checkbox-label">
                            <input type="checkbox" name="skills" id="mongo" value="MongoDB" checked={skills.includes('MongoDB')} onChange={handleSkill}
                                className="checkbox-input" /> MongoDB
                        </label>
                    </div>
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>


            <section>
                <h1 className="text-3xl font-bold text-teal-600 mb-4 text-center">
                    Users List:
                </h1>
                {/* Implicit return */}
                <div className="container mx-auto p-4">
                    {users.map((user, i) => (
                        <div key={i} className="bg-white shadow-md rounded-lg p-6 mb-4">
                            <p className="text-xl font-semibold mb-2">Name: {user.username}</p>
                            <p className="text-gray-700 mb-2">Gender: {user.gender}</p>
                            <p className="text-gray-700">
                                Skills: <span className="text-blue-500">{user.skills.join(', ')}</span>
                            </p>
                        </div>
                    ))}
                </div>

            </section>
        </Fragment>
    )
}

export default _02_TwoWayBinding