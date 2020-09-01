import React from 'react';
import classNames from 'classnames'

function  Button(props) {
    return(
        //<button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>
        <button className={classNames('button', {
            'button-outline': props.outline, 
        })}>
            {props.children}
        </button>
    )
}
export default Button;