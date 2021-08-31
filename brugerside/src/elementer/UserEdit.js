import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const UserEdit = (props) => {
    return (
    <Edit title='Rediger' {...props}>
        <SimpleForm>
          <TextInput disabled source='id'/>
          <TextInput source='navn' />
          <TextInput source='mail' />
          <DateInput disabled source='lavetPaa' />
          </SimpleForm>
    </Edit>
    )
}

export default UserEdit
