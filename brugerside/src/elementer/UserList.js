import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Edit, EmailField, DateInput} from 'react-admin'

const UserList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='navn' />
            <EmailField source='mail' />
            <DateField source='lavetPaa' />
            <EditButton basePath='/elever' />
            <DeleteButton basePath='/elever' />
        </Datagrid>
    </List>
}

export default UserList
