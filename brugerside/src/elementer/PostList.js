import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Edit} from 'react-admin'

const PostList = (props) => {
    return <List {...props}>
        
        <Datagrid>
            <TextField source='id' />
            <TextField source='titel' />
            <DateField source='lavetPaa' />
            <TextField source='besked' />
            <TextField source='oprettetaf' />
            <EditButton basePath='/beskeder' />
            <DeleteButton basePath='/beskeder' />
        </Datagrid>
    </List>
}

export default PostList
