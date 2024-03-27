import React, {useState} from 'react'
import Header from '@/Components/Header';

export default () => {

    // 2. Passing data from Parent to Child ---------------
    const [user, setUser] = useState('Ayush');
    const [editor, setEditor] = useState("GFX Mentor")
    return (
        <>
            <Header userName={user} edit={editor} />
            {user}
            <br />
            {editor}
            <div>_02_Props</div>
        </>
    )
}
