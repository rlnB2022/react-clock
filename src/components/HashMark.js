import './HashMark.css';

const HashMark = (props) => {
    return (
        <div className='hash-mark' style={{transform: `rotate(-${props.angle}deg)`, height: props.size % 5 === 0 ? '10px' : '5px', width: props.size % 5 === 0 ? '8px' : '4px'}}>
            
        </div>
    )
};

export default HashMark;