import List2 from './list2.tsx'
import Table2 from './table2.tsx'
import Form2 from './form2.tsx'

function Hobby2() {
    /* Html code to insert */
    return (
        <>
            <h2>One Piece</h2>
            <div id = "ThousandSunny">
                <img src="src/assets/ThousandSunny.png" width ="640" alt="Picture of Thousand Sunny" />
            </div>
            <header>
                One Piece is a mange written by Eiichiro Oda and is one of the most sold books of all time. It is read by a large number of people. It is about a boy called Luffy who wants to reach the end of the sea and become the King of Pirates.
            </header>
            <List2/>
            <br/>
            <br/>
            <Table2/>
            <br/>
            <br/>
            <Form2/>
        </>
    )
}

export default Hobby2;