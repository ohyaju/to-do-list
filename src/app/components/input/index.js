const Input = () => {
    return (
        <div>
            <div>
                <input placeholder="Add a new task..." />
                <button className="buttonContainer">Add</button>
            </div>
            <div>
                <button className="buttonContainer">All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default Input