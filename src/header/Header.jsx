import classes from './header.module.css'

function Header(props) {

    function keyUp(event, value){
        if(event.keyCode == 13){
            props.addList(value)
            event.target.value = ''
        }}

    return (
        <header>
            <h1>Todos</h1>
            <input className={classes['new-todo']} placeholder="What needs to be done?" autoFocus on type='text' onKeyUp={(event) => keyUp(event, event.target.value)}></input>
        </header>
    );
}

export default Header;