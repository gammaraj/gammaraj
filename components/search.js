export default function Search({ }) {

    return (
        <form>
          <div className="grid">
            <input type="text" name="addtask" placeholder="Add task" aria-label="Add task" required={true}/>
            <input type="text" name="addtag" placeholder="Add tag" aria-label="Add tag"/>
            <button type="submit">Add</button>
          </div>
        </form>
        
    )
}