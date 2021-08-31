import React from 'react'
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const UserCreate = (props) => {
    return (
    <Create title='Opret ny bruger' {...props}>
        <SimpleForm>
          <TextInput source='navn' />
          <TextInput source='mail' />
          <DateInput label='Udgivelsesdato' source='lavetPaa' />
          </SimpleForm>
    </Create>
    )
}

export default UserCreate
