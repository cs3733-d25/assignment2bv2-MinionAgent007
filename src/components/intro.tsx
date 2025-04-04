interface Props {
    name: string;
    name2: string;
}

export function Intro(props: Props) {
    return(
        <div>
            <p id="intro">
                We are team 65! Our names are {props.name} and {props.name2}!
            <br/>
            <br/>
                My name is {props.name}. I'm a WPI sophomore currently majoring in Computer Science, and minoring in Data Science. In my free time, in addition to coding, I also enjoy playing ping pong.
            <br/>
            <br/>
                Hey! I am {props.name2}. I am a sophomore majoring in CS and Physics. I like reading One Piece and playing games in my free time.
            </p>
        </div>
    )
}

export default Intro
