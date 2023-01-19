import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export default function TaskCard({task}) {

    function mostrarAlerta() {
        console.log('Eliminando...');
        console.log(task.id);
    }

    const {deleteTask} = useContext(TaskContext);

    return(
       
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button onClick={() => deleteTask(task.id) }>
                    Eliminar tarea
                </button>
            </div>

    );
}