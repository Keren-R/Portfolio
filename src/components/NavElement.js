import React from 'react';

export function NavElement(props){
    props = props.data

    return (
        <div className="navbar-logo">
            <a href={props.svgHref} target={props.target} rel="noopener" className={props.className}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className={"bi d-block mx-auto mb-1 bi-" + props.svgClassName} viewBox="0 0 16 16">
                    <path d={props.svgPath}/>
                </svg>
                {props.title}
            </a>
        </div>
    );
}
