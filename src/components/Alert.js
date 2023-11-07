import React from 'react'


export default function Alert(props) {
if(props.alert)
  {return (
    
    <div class={`alert alert-${props.alert.alerttype} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.alerttype}</strong>{props.alert.alerttitle}
    </div>
  )}
}


