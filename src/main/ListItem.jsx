import classes from './main.module.css'

export default function ListItem(props) {
    return (
        <li id={props.id}>
            <div>
                <input type="checkbox" className={classes.toggle} />
                <label>
                    <span className={classes.description}>{props.children}</span>
                    <span className={classes.created}>created 1 seconds ago</span>
                </label>
                <button className={`${classes.icon} ${classes['icon-edit']}`}></button>
                <button className={`${classes['icon-destroy']} ${classes.icon}`} onClick={(event) => props.deleteList(event.target.closest('li'))}></button>
            </div>
        </li>
    )
}