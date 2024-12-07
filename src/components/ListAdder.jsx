import { useState } from 'react';

const ListAdder = ({ setShowList }) => {
    const [newShow, setNewShow] = useState("");

    const handleChange = (event) => {
        setNewShow(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setShowList((currShowList) => {
            return [...currShowList, newShow]
        });
        setNewShow("");
    };

    return (
        <footer>
            <form onSubmit={handleSubmit}>
                <input placeholder="What show are you currently watching?" type="text" id="show" onChange={handleChange} value={newShow} />
                <input type="submit" value="Add to your list" />
            </form>
        </footer>
    )
}

export default ListAdder;