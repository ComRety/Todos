export default function FooterItem(props) {
    return (
        <li>
            <button className={props.clas}>{props.children}</button>
        </li>
    )
}