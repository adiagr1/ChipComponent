import React from 'react'

export default function InputDropdownItem({user, input}) {
  const indexOfMatch = user.name.toLowerCase().indexOf(input);
  const strBefore = indexOfMatch > 0 ? user.name.substr(0, indexOfMatch) : '';
  const strToHighlight = user.name.substr(indexOfMatch, input.length);
  const strAfter = user.name.substr(indexOfMatch+input.length);
  return (
    <div>
    <img src={user.picture} alt='test'/>
    <span className='margin-l'>{strBefore}</span>
    <span className='colorGrey'>{strToHighlight}</span>
    <span className='margin-r'>{strAfter}</span>
    <span className='colorGrey margin-r margin-l'>{user.email}</span>
    </div>
  )
}
