import TaskList from "./TaskList"

export default function Main(props) {
    return (
        <main>
            <TaskList state={props.state} deleteList={props.deleteList}/>
        </main>
    )
}