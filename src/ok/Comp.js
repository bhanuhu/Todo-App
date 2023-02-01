import React from "react";
import './Comp.css';

const Comp = (props) => {
    const arr = (props.name)
    return (
        <div >
            {arr.map((ab) =>
                <div key={arr.id} className="ok">
                            <tr className="td1"><td>{ab.name}</td>
                                <td><button type="button" className="bt1" onClick={props.delet}>Delete</button></td>
                            </tr>
                            <tr className="td2">{ab.description}</tr>
                </div>)}
        </div>
    );
}
export default Comp;