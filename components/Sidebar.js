import React from 'react'
import styled from 'styled-components';
import { Avatar, IconButton, Button } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';

function Sidebar() {

const createChat = () => {
    const input = prompt('Please enter an email address for the user you wish to chat with');
    if(!input) return null;
    
    if(EmailValidator.validate(input)){
        
    }
}

  return (

<Container>
    <Header>
        <UserAvatar/>

        <IconsContainer>
            <IconButton>
            <ChatIcon/>
            </IconButton>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
            
        </IconsContainer>
    </Header>

    <Search>
        <SearchIcon/>
        <SearchInput placeholder="Search Chat"/>
    </Search>

    <SidebarButton onClick={createChat}>Start Conversation</SidebarButton>
</Container>
  )
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;

const SidebarButton = styled(Button)`
    width: 100%;

    &&&{
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    }

`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    /* height: 80px; */
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;
:hover {
    opacity: 0.8;
}
`;

const IconsContainer = styled.div``;