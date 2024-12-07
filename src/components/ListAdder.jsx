import { useState } from 'react';

const ListAdder = ({ setShowList }) => {
    const [newShow, setNewShow] = useState("");

    const handleChange = (event) => {
        setNewShow(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newShow.trim()) {
            // Add new show to the list
            setShowList((currShowList) => [...currShowList, newShow.trim()]);
            setNewShow("");
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="What show are you currently watching?"
                    type="text"
                    id="show"
                    onChange={handleChange}
                    value={newShow}
                />
                <input type="submit" value="Add to your list" />
            </form>
        </div>
    );
};

export default ListAdder;
