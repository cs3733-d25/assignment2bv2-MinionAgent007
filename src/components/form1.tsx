function Form1() {
    return (
        <>
            <form>
                {/* Text entry */}
                <label htmlFor="fullname">Full name:</label>
                <input type="text" id="fullname"/>
                <br/>
                <label htmlFor="email">Email address:</label>
                <input type="text" id="email"/>
                <br/>
                {/* Checkboxes */}
                <span>What do you enjoy playing?</span>
                <br/>
                <input type="checkbox" id="singles"/>
                <label htmlFor="singles">Singles</label>
                <br/>
                <input type="checkbox" id="doubles"/>
                <label htmlFor="doubles">Doubles</label>
                <br/>
                {/* Multiple choice */}
                <span>What's your skill level?</span>
                <br/>
                <input type="radio" name="skill" id="advanced"/>
                <label htmlFor="advanced">Advanced</label>
                <br/>
                <input type="radio" name="skill" id="intermediate"/>
                <label htmlFor="intermediate">Intermediate</label>
                <br/>
                <input type="radio" name="skill" id="beginner"/>
                <label htmlFor="beginner">Beginner</label>
                <br/>
                {/* Text area */}
                <label htmlFor="experience">Tell us about your playing experience.</label>
                <br/>
                <textarea id="experience" rows={4} cols={50}></textarea>
                <br/>
                {/* Dropdown list */}
                <label htmlFor="playingstyle">What is your preferred playing style?</label>
                <select id="playingstyle">
                    <option value="offensive">Offensive</option>
                    <option value="defensive">Defensive</option>
                    <option value="allrounder">All-Rounder</option>
                </select>
                <br/>
                {/* Submit button */}
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form1