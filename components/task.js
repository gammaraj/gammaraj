export default function Task({ task }) {
    const { id, name, status, tag} = task
  
    return (
      <div
        className="grid"
        key={task.id}
      >
        <div className="grid">
          <div className="font-bold text-xl mb-2">{tag.name}: {name} - {status}</div>
        </div>
        
      </div>
    )
  }