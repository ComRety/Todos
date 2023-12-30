import FooterList from "./FooterList"
import classes from './footer.module.css'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <span className={classes['todo-count']}>0 items left</span>
            <FooterList />
            <button className={classes['clear-completed']}>Clear completed</button>
        </footer>
    )
}