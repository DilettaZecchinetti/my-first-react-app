import { useState, useEffect } from 'react';
import ListAdder from './ListAdder';

const ShowList = () => {
    // Initialize state from localStorage or default list
    const [showList, setShowList] = useState(() => {
        const savedList = localStorage.getItem("showList");
        return savedList ? JSON.parse(savedList) : ["The Walking Dead", "Severance", "Baby Reindeer"];
    });

    const [editingIndex, setEditingIndex] = useState(null); // Track which item is being edited
    const [editingValue, setEditingValue] = useState(""); // Store the new value being typed

    // Save showList to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("showList", JSON.stringify(showList));
    }, [showList]);

    // Handle deleting a show
    const handleDelete = (indexToDelete) => {
        setShowList((currentList) => currentList.filter((_, index) => index !== indexToDelete));
    };

    // Start editing a specific show
    const handleEdit = (index) => {
        setEditingIndex(index); // Set the index of the item being edited
        setEditingValue(showList[index]); // Pre-fill the input with the current value
    };

    // Save the modified title
    const handleSave = () => {
        setShowList((currentList) =>
            currentList.map((show, index) => (index === editingIndex ? editingValue.trim() : show))
        );
        setEditingIndex(null); // Exit editing mode
        setEditingValue(""); // Clear the input field value
    };

    return (
        <div className='show-list-container'>
            <ol>
                {showList.length > 0 ? (
                    showList.map((show, index) => (
                        <li key={index}>
                            {editingIndex === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingValue}
                                        onChange={(e) => setEditingValue(e.target.value)}
                                    />
                                    <button className="save-button" onClick={handleSave}>Save</button>
                                    <button className="cancel-button" onClick={() => setEditingIndex(null)}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    {show}
                                    <div className="button-container">
                                        <button className="modify-button" onClick={() => handleEdit(index)}>Modify</button>
                                        <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))
                ) : (
                    <li>No shows in your list</li>
                )}
            </ol>
            <ListAdder
                setShowList={(newShowList) => setShowList(newShowList)}
            />
        </div>
    );
};

export default ShowList;


