import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export const ListQuestions = () => {
    const [listquestions, setListQuestions] = useState<any[]>([]);

    const questions = useOutletContext<any[]>();

    useEffect(() => {
        setListQuestions(questions);
    }, [questions]);

    
    console.log(listquestions);
    
    
    return (
        <ul>
            {listquestions.map(item => <li key={item.index}>{item.context}</li>)}
        </ul>
    )
}