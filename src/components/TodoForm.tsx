import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(titlel: string): void
}

export  const TodoForm: React.FC<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

   // const [title, setTitle] = useState<string>('')

   // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
     //   setTitle(event.target.value)
    //}

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
         //   console.log(title)
         //   setTitle('')
         props.onAdd(ref.current!.value)
         ref.current!.value = ''
        }
    }

    return (
        <div className="row mt2">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    <input
            //        onChange={changeHandler} 
            //        value = {title} 
                    ref = {ref}
                    type="text" 
                    id="autocomplete-input" 
                    className="autocomplete"
                    onKeyPress={keyPressHandler}
                    />
                    <label htmlFor="autocomplete-input" className="active">Название</label>
                    </div>
                </div>
            </div>
        </div>
    )
}