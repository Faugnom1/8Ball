import React from 'react';

function choice(arr){
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function EightBall(props) {

    const [message, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    function handleClick(){
        const {message, color} = choice(answers)
        setMsg(message);
        setColor(color);
    }

    return (
        <div className="EightBall"
        onClick={handleClick}
        style={{backgroundColor: color}}>  
        
        <p>
            {message}
        </p>
        </div>
    );
}

export default EightBall;