import ListItem from "./ListItem"
import classes from './main.module.css'

let key = 0;

export default function TaskList(props) {
    return (
        <ul className={classes['todo-list']}>
            {
                props.state.map(item => {
                    key += 1;
                   return <ListItem key={key} deleteList={props.deleteList} id={item.id}>{item.value}</ListItem> 
                })
            }
        </ul>
    )
}