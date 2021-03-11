/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">
                <input id="passoInput" type="number"
                    value={props.passo}
                    onChange={e => props.setPasso(+e.target.value)}
                />
            </label>
        </div>
    )
}