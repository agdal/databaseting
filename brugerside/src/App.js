import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import PostList from './elementer/PostList'
import PostCreate from './elementer/PostCreate'
import PostEdit from './elementer/PostEdit'

import UserList from './elementer/UserList'
import UserCreate from './elementer/UserCreate'
import UserEdit from './elementer/UserEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource 
       name='elever' 
       list={UserList} 
       create={UserCreate} 
       edit={UserEdit}
       />
       <Resource 
       name='beskeder' 
       list={PostList} 
       create={PostCreate} 
       edit={PostEdit}
       />
    </Admin>
  )
}

export default App;
