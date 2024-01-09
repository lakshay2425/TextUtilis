import React from 'react'

const Alert = (props) => {
    // const capitalize = (word) => {
    //     const lower = props.alert.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    <>
    <div style = {{height : '3rem'}}>
        {props.alert && (<div className= {`alert alert-${ props.alert.type } alert-dismissible fade show `} role= "alert" >
        <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong> : {props.alert.message}
        </div>
        )}
    </div>
    </>
  )
}

export default Alert;