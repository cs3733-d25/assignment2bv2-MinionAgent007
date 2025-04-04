function Form2(){
    return (
        <>
            <form>
                <label htmlFor="fullname">Enter your Fullname</label>
                <input type="text" id="fullname"/>
                <br/>
                <br/>
                <label htmlFor="favhat">Enter your Favorite Strawhat food</label>
                <input type="text" id="favhat"/>
                <br/>
                <br/>
                Select which Strawhats you'd have on your crew:
                <br/>
                <input type="checkbox" id="luffy"/>
                <label htmlFor="luffy">Luffy</label>
                <br/>
                <input type="checkbox" id="zoro"/>
                <label htmlFor="zoro">Zoro</label>
                <br/>
                <input type="checkbox" id="nami"/>
                <label htmlFor="nami">Nami</label>
                <br/>
                <input type="checkbox" id="usopp"/>
                <label htmlFor="usopp">Usopp</label>
                <br/>
                <input type="checkbox" id="sanji"/>
                <label htmlFor="sanji">Sanji</label>
                <br/>
                <input type="checkbox" id="chopper"/>
                <label htmlFor="chopper">Chopper</label>
                <br/>
                <input type="checkbox" id="robin"/>
                <label htmlFor="robin">Robin</label>
                <br/>
                <input type="checkbox" id="franky"/>
                <label htmlFor="franky">Franky</label>
                <br/>
                <input type="checkbox" id="brook"/>
                <label htmlFor="brook">Brook</label>
                <br/>
                <input type="checkbox" id="jinbei"/>
                <label htmlFor="jinbei">Jinbei</label>
                <br/>
                <br/>


                What is your prefered style of animation for one piece?
                <br/>
                <input type="radio" id="old" name="animation_style" value="Pre-Timeskip"/>
                <label htmlFor="old">Pre-Timeskip</label><br/>
                <input type="radio" id="new" name="animation_style" value="Timeskip"/>
                <label htmlFor="new">Timeskip</label><br/>
                <input type="radio" id="manga" name="animation_style" value="Manga"/>
                <label htmlFor="manga">Neither, I only read the manga</label>

                <br/>
                <br/>

                <label htmlFor="comments">Enter your comments about this site or about One Piece</label>
                <br/>
                <textarea id="experience" rows={4} cols={50}></textarea>

                <br/>
                <br/>

                <label htmlFor="playingstyle">Select Your Favorite Sea: </label>
                <select id="playingstyle">
                    <option value="offensive">North Blue</option>
                    <option value="defensive">East Blue</option>
                    <option value="allrounder">West Blue</option>
                    <option value="allrounder">South Blue</option>
                </select>
                <br/>

                <br/>
                <input type="submit" value="Submit"/>


            </form>


        </>
    )
}

export default Form2