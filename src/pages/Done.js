export default function Done({ todos }) {
    let i = 1;    

    const display = () => {
         return todos.map((todo, index) => {
            if (todo.isDone === true) {        
                 return (
                    <li className="text-lg pt-5 flex border-dashed border-2 border-white p-5 mb-5 rounded" key={index}>
                        <div>
                            <div className="font-bold">{i++}: {todo.title} </div>
                            <div>{todo.description}</div>
                        </div>
                    </li>
                    )
                }
            })
        }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[500px]">
                <div className="pt-5">
                    <div className="text-lg font-bold mb-5">
                        Done:
                    </div>
                </div>
                <ul>{display()}</ul>
            </div>
        </div>
    )
}