import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CurrentQuestion } from "../CurrentQuestion/CurrentQuestion";

export const ListQuestions = () => {
    const [listquestions, setListQuestions] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    
    const questions = useOutletContext<any[]>();

    useEffect(() => {
        setListQuestions(questions);
    }, [questions]);

    const handleNextQuestion = () => {
        if(currentQuestionIndex < listquestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }  
    }

    const handlePreviousQuestion = () => {
        if(currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }  
    }

    
    console.log(listquestions[0]);
    
    
    return (
        <ul>
            <ul>
                {listquestions.length > 0 && (
                    <CurrentQuestion
                        title={listquestions[currentQuestionIndex].title}
                        discipline={listquestions[currentQuestionIndex].discipline}
                        year={listquestions[currentQuestionIndex].year}
                        context={listquestions[currentQuestionIndex].context}
                        files={listquestions[currentQuestionIndex].files}
                        correctAlternative={listquestions[currentQuestionIndex].correctAlternative}
                        alternatives={listquestions[currentQuestionIndex].alternatives}
                        key={currentQuestionIndex}
                    />
                )}
            </ul>

            <div>
                <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Anterior
                </button>
                <button onClick={handleNextQuestion} disabled={currentQuestionIndex === listquestions.length - 1}>
                    Próxima
                </button>
            </div>
        </ul>
    )
}