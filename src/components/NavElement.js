import React from 'react';

export function NavElement(props){

    const [elementSize, setElementSize] = React.useState(24)

    function mouseEnterHandler(){
        setElementSize(32)
    }

    function mouseLeaveHandler(){
        setElementSize(24)
    }

    props = props.data
    return (
        <div>
            <a href={props.svgHref} className={props.className}
               onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width={elementSize} height={elementSize} fill="currentColor"
                     className={"bi d-block mx-auto mb-1 bi-" + props.svgClassName} viewBox="0 0 16 16">
                    <path d={props.svgPath}/>
                </svg>
                {props.title}
            </a>
        </div>
    );
}
