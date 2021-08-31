import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const PostEdit = (props) => {
    var secretAdmin = 1
    return (
    <Edit title='Rediger' {...props}>
        <SimpleForm>
          <TextInput disabled source='id'/>
          <TextInput source='titel' />
          <TextInput multiline source='besked' />
          <DateInput disabled source='lavetPaa' />
          {(() => {
              if (secretAdmin == 1) {
                  return (
                <TextInput source='title' />
                )
              }
          })}
          <TextInput source='secretAdmin' />
        
          </SimpleForm>
    </Edit>
    )
}

export default PostEdit
