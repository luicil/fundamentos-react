import React from 'react'
// import FamiliaMembro from './familiaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return(
        <div>

            {

                props.children.map((child, i) =>{
                    return React.cloneElement(child, { ...props, key: i});
                })

                // React.Children.map(props.children, (el) =>{
                //     return React.cloneElement(el, props)
                // })
            }

            {/* <FamiliaMembro nome="Luicil" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Nanci" {...props} />
            <FamiliaMembro nome="Rafael" sobrenome="Fernandes" /> */}
        </div>
    )

}