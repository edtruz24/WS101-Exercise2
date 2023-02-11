import { useState } from "react"


export default function Todo({ data, setData }) {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        isEditing: false,
        index: -1,
        isDone: false,
    })

    let i = 1;

    const titleChange = (e) => {
        setTodo({ ...todo, title: e.target.value })
    }
    const descriptionChange = (e) => {
        setTodo({ ...todo, description: e.target.value })
    }

    const buttonClicked = () => {
        setData([...data, todo])
        setTodo({ title: '', description: '' })
    }

    function deleteClicked(index) {
        let modifedTodos = data.filter((data, todoIndex) => {
            if (index !== todoIndex)
                return data;
        })
        setData(modifedTodos)
    }

    function editClicked(index, todoItem) {
        setTodo({ title: todoItem.title, description: todoItem.description, isEditing: true, index: index })
    }

    function updateClicked() {
        let newTodos = data.map((data, index) => {
            if (index === todo.index) {
                return { title: todo.title, description: todo.description }
            }
            return data;
        })
        setData(newTodos)
        setTodo({ ...todo, title: '', description: '', isEditing: false })
    }

    function doneClicked(index) {
        let modifedTodos = data.filter((data, todoIndex) => {
            if (index === todoIndex) {
                return (data.isDone = true)
            }
            else {
                return data;
            }
        })
        setData(modifedTodos)
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[500px]">
                <div className="pt-5">
                    <div className="text-lg font-bold">Todos:</div>
                    Title: <input name="title" value={todo.title} onChange={titleChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    Description: <input name="description" value={todo.description} onChange={descriptionChange} className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                    {todo.isEditing ? (
                        <button onClick={updateClicked} className="mt-3 mb-5 shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Update
                        </button>
                    ) : (
                        <button onClick={buttonClicked} className="mt-3 mb-5 shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Add todo
                        </button>
                    )}
                </div>
                <ul>
                    {data.map((todo, index) => {
                        if (todo.isDone !== true) {
                            return (
                                <li className="text-lg pt-5 flex border-dashed border-2 border-white p-5 mb-5 rounded" key={index}>
                                    <div className="grow">
                                        <div className="font-bold font-serif">{i++}: {todo.title}</div>
                                        <div>{todo.description}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => doneClicked(index)} className="mt-3 mr-4 shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                            Done
                                        </button>
                                        <button onClick={() => editClicked(index, todo)} className="mt-3 mr-4 shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteClicked(index)} className="mt-3 shadow bg-stone-500 hover:bg-stone-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}