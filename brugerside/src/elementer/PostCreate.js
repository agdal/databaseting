import React from 'react'
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const PostCreate = (props) => {
    return (
    <Create title='Opret nyy' {...props}>
        <SimpleForm>
          <TextInput source='titel' />
          <TextInput multiline source='besked' />
          <DateInput label='Udgivelsesdato' source='lavetPaa' />
          </SimpleForm>
    </Create>
    )
}

export default PostCreate
