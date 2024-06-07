import { memo } from "react";

const Child = (props) => {
    console.log('mounted');
    return (
        <div>
            <p>Child component's here</p>
            <button onClick={props.handleIncre}>Click on Child</button>
        </div>
    )
}

export default memo(Child, (prevProps, nextProps) => {
    return true
})