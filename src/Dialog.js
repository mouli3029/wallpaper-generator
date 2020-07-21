import React from 'react';
let dialogStyles = {
    width: '500px',
    maxWidth:'100%',
    margin: '0 auto',
    position:'fixed',
    left:'50%',
    top :'50%',
    transform:'translate(-50%,-50%)',
    ZIndex: '999',
    backgroundColor:'#eee',
    padding: '10px 20px 40px',
    borderRadius :'8px',
    display :'flex',
    flexDirection:'column'
};
let dialogButtonStyles = {
    marginBottom:'15px',
    padding:'3px 8px',
    cursor:'pointer',
    borderRadius:'50%',
    border:'none',
    width:'30px',
    height:'30px',
    fontWeight:'bold',
    alignSelf:'flex-end'
};
function Dialog({isOpen,link,onClose}) {
    let dialog = (
        <div style={dialogStyles}>
        <button style={dialogButtonStyles} onClick={onClose}>x</button>
        <div>
        <h4>You download the image here :</h4>
          {link}
        </div>    
    </div>
    )
    if(!isOpen){
        dialog=null;
    }
    return (
        <div>
            {dialog}
        </div>   
    )
}
export default Dialog
