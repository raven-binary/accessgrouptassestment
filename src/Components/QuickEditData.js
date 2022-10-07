import React from "react";

const QuickEditData = ({edit, setEdit}) => {
    return (
        <div>
            {edit.map((qdata) =>
            (
                <li className="list" key={qdata.id}>
                    <input type ="text" value={qdata.title} className="list" onChange={(event) => event.preventDefault()}/>
                </li>
            ))}
        </div>
    );
};

export default QuickEditData