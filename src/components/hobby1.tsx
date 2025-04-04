import List1 from './list1.tsx'
import Table1 from './table1.tsx'
import Form1 from './form1.tsx'

function Hobby1() {
    return (
        <>
            <h2>Ping Pong</h2>
            <img src="src/assets/pingpongbanner.jpg" width="640" alt="AI generated img of a ping pong table"></img>
            <p>Ping pong is a tabletop sport, with either 2 or 4 players. Each person has a paddle, which they use to hit the ball over the net and onto the other side of the table. Basically, it's tennis but on a table, hence its other name: table tennis.</p>
            <List1/>
            <br/>
            <br/>
            <Table1/>
            <br/>
            <br/>
            <Form1/>
            <br/>
            <br/>
        </>
    )
}

export default Hobby1;