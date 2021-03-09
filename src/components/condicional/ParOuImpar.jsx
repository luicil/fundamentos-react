import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    var isPar = props.numero % 2 === 0

    return (
        <div>
            { isPar ? <span>Par</span> : <span>Impar</span> }
        </div>
    )
}
