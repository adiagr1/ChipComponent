import React from 'react'
import { useChipComponentContext } from '../config/chipComponentContext'

export default function Chip({user, isHighlighted}) {
  const {
    action: {
      removeActiveUser,
    } 
  } = useChipComponentContext();
  const style = isHighlighted ? 'borderBlue' : '';
  return (
    <div className={`chip ${style}`}>
        <img src={user.picture} alt='test'/>
        <span>{user.name}</span>
        <span className="closebtn" onClick={()=>removeActiveUser(user)}>&times;</span>
    </div>
  )
}
