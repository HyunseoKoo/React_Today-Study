import TodoCard from "./Card/Card";

function TodoList() {

    const TODO_LIST = [
        {
            ID: 1,
            title: 'example1',
            content: 'content1',
            state: false,
            edit: false,
        },
        {
            ID: 2,
            title: 'example',
            content: 'content2',
            state: false,
            edit: false,
        },
        {
            ID: 3,
            title: 'example3',
            content: 'content3',
            state: false,
            edit: false,
        },
        {
            ID: 4,
            title: 'example4',
            content: 'content4',
            state: false,
            edit: false,
        }
    ]

    return (
        <div>
            {TODO_LIST.map((todo) => (
                <TodoCard todo={todo}/>
            ))}
        </div>
    );
}

export default TodoList;