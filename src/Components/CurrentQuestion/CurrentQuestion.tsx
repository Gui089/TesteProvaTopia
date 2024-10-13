import React from "react";
import { AlternativesButton, Container, ContainerQuestion, ListQuestion, TextQuestion } from "./style/style";

interface QuestionsProps {
    title: string;
    discipline:string;
    year:number;
    context: string;
    files: string;
    correctAlternative: string;
    alternatives: any[];
    alternativesIntroduction: string;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentQuestion = ({
    title,
    discipline,
    year,
    context,
    files,
    correctAlternative,
    alternatives,
    alternativesIntroduction,
    setScore,
    setCurrentQuestionIndex
}: QuestionsProps) => {

    const handleSelectQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
        const alternativeSlected = e.currentTarget.value;

        if(alternativeSlected == correctAlternative) {

           console.log('Acertou');
           setScore(prev => prev + 10);
           setCurrentQuestionIndex(prev => prev + 1);

        } else {
            console.log('Errou');
        }
  
    }

    return (
        <Container>
            <h1>{title}</h1> 
            <h1>{year}</h1>
            <h1>{discipline}</h1>

            <img src={files} />
            <ContainerQuestion>

                <TextQuestion>
                    {context}
                </TextQuestion>
                 
                <TextQuestion>
                    {alternativesIntroduction}
                </TextQuestion>


                <ul>
                    {alternatives.map(item => 
                    <ListQuestion key={item.letter}>
                        <AlternativesButton onClick={handleSelectQuestion} value={item.letter}>
                            {item.letter}
                        </AlternativesButton>

                        <p>{item.text}</p>
                        
                        {item.file && <img src={item.file} />}

                    </ListQuestion>)}

                </ul>
            </ContainerQuestion>
        </Container>
    )
}