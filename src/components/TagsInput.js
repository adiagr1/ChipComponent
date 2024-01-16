import React from 'react'
import Chip from './Chip'
import InputDropdown from './InputDropdown'
import { useChipComponentContext } from '../config/chipComponentContext'

export default function TagsInput() {

  const {
    active,
    highlighted,
  } = useChipComponentContext();

  const lastUser = highlighted && active.length > 0 ? active[active.length-1]: null;

  return (
    <div className='tags-input-container'>
        {active.map( user => user !== lastUser && (
            <Chip key={user.email} user={user}/>
        ))}
        {lastUser && <Chip key={lastUser.email} user={lastUser} isHighlighted={true}/>}
        <InputDropdown/>
    </div>
  )
}
