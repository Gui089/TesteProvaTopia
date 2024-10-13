import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CurrentQuestion } from "../CurrentQuestion/CurrentQuestion";
import { Container, ContainerButtons } from "./style/style";

export const ListQuestions = () => {
    const [listquestions, setListQuestions] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score,setScore] = useState<number>(0);

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

    
    console.log(listquestions[currentQuestionIndex]);
    
    
    return (
        <Container>

        <h1>Sua Pontuação: {score} Pts</h1>

        <ul>
            <ul>
                {listquestions.length > 0 && (
                    <CurrentQuestion
                       alternativesIntroduction={listquestions[currentQuestionIndex].alternativesIntroduction}  
                        title={listquestions[currentQuestionIndex].title}
                        discipline={listquestions[currentQuestionIndex].discipline}
                        year={listquestions[currentQuestionIndex].year}
                        context={listquestions[currentQuestionIndex].context}
                        files={listquestions[currentQuestionIndex].files}
                        correctAlternative={listquestions[currentQuestionIndex].correctAlternative}
                        alternatives={listquestions[currentQuestionIndex].alternatives}
                        key={currentQuestionIndex}
                        setScore={setScore}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                    />
                )}
            </ul>

            <ContainerButtons>
                <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Anterior
                </button>
                <button onClick={handleNextQuestion} disabled={currentQuestionIndex === listquestions.length - 1}>
                    Próxima
                </button>
            </ContainerButtons>
        </ul>
        </Container>
    )
}