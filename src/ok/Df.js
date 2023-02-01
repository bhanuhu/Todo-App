import { useState } from "react";
import './Df.css';
import Comp from './Comp';
function Df() {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [arr, setarr] = useState([])
    const namech = (event) => {
        setname(event.target.value);
    }
    const desc = (event) => {
        setdescription(event.target.value)
    }
    const abc = (event) => {
        event.preventDefault();
        const id = arr.length + 1;
        setarr(prev => [{ id: id, name: name, description: description }, ...prev])
        setname("");
        setdescription("");
        console.log(id)
    }
    const delet = (id) => {
        const newTasks = [...arr];
        newTasks.splice(id, 1);
        setarr(newTasks)
    }
    return (
        <div  >
            <div className="b">
                <form onSubmit={abc}>
                    <table><tbody>
                        <tr>
                            <td className='text-mute'>Name</td>
                            <td className='text-mute'>Description</td>
                            <td ><button type="submit" className="buut" >Add Todo</button></td>

                        </tr>
                        <tr>
                            <td><input onChange={namech} value={name} className='text-mut' required></input></td>
                            <td><input onChange={desc} value={description} className='text-mu' required></input></td>
                        </tr>
                    </tbody>
                    </table>
                </form>

            </div>
            <div className="abc">
                <Comp name={arr} delet={delet} />
            </div>
        </div>
    );
}
export default Df;