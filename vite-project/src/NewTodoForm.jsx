export function NewTodoForm() {
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
              <label htmlFor="item">New Item</label>
              <input value={newitem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
          </div>

          <button className="btn">Add Task</button>

        </form>

    )
}