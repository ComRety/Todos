import FooterItem from "./FooterItem"
import classes from './footer.module.css'

export default function FooterList() {
    return (
        <ul className={classes.filters}>
            <FooterItem clas={classes.selected}>All</FooterItem>
            <FooterItem>Active</FooterItem>
            <FooterItem>Completed</FooterItem>
        </ul>
    )
}