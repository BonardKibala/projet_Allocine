import {Form,Input,Icon} from 'semantic-ui-react'
const FormSearch=({ onChange,onSubmit,value })=>{
    return(
        <Form onSubmit={onSubmit} floated='right'>
        <Form.Field className="form">
            <Input icon={<Icon name='search' inverted circular link />} className="form-search__input"
                placeholder="Rechercher" onChange={onChange} value={value} />
        </Form.Field>
    </Form>
    )
}
export default FormSearch;