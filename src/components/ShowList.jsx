import { useState } from 'react'
import ListAdder from './ListAdder';

const ShowList = () => {
    const [showList, setShowList] = useState(["The Walking Dead", "Severance", "Baby Reindeer"]);

    return (
        <section>
            <ul>
                {showList.map((show) => {
                    return <li key={show}>{show}</li>;
                })}
            </ul>
            <ListAdder setShowList={setShowList} />
        </section>
    );
};

export default ShowList;


