import './TaskCard.css'


const TaskCard=(props)=>{
    let date1;
    if(props.dueDate){
        date1="Due on: "+props.dueDate;
    }
    else{
        date1="Completed on: "+ props.completedAtDate;
    }
    return (
      <div className="TaskItem">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <p>{date1}</p>
          <p>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard;