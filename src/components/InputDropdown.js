import React from 'react'
import { useChipComponentContext } from '../config/chipComponentContext'
import InputDropdownItem from './InputDropdownItem';

export default function InputDropdown() {
  
  const {
    active: activeUserList,
    inactive: userList,
    input,
    highlighted,
    action: {
        setInputText,
        addActiveUser,
        removeActiveUser,
        setHighlighted,
    }
  } = useChipComponentContext();

  const filteredUserList = userList.filter(user=>user.name.toLowerCase().includes(input));

  console.log({userList, activeUserList});

  const handleBackspace = async (event) => {
    if (event.key === 'Backspace') {
        if(highlighted)
        {
            if(activeUserList.length > 0)
            {
                const lastUser = activeUserList[activeUserList.length-1];
                removeActiveUser(lastUser);
            }
            setHighlighted(false);
        }
        else{
            if(activeUserList.length > 0)
            {
                setHighlighted(true);
            }
        }
    }
  }

  return (
    <div className='dropdown'>
        <div id="myDropdown" className="dropdown-content">
        <input type="text" placeholder="Search.." id="myInput" onChange={e=>setInputText(e.target.value)} onKeyDown={handleBackspace}/>
            <div className='searchList'>
            {filteredUserList.map((user)=>(
                <a onClick={()=>addActiveUser(user)} key={user.email} href='#home'>
                    <InputDropdownItem user={user} input={input}/>
                </a>
            ))}
            </div>
        </div>
    </div>
  )
}
