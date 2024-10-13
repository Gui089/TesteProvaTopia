import { AlternativesButton, Container, ContainerQuestion, ListQuestion, TextQuestion } from "./style/style";

interface QuestionsProps {
    title: string;
    discipline:string;
    year:number;
    context: string;
    files: string;
    correctAlternative: string;
    alternatives: any[];
}

export const CurrentQuestion = ({
    title,
    discipline,
    year,
    context,
    files,
    correctAlternative,
    alternatives
}: QuestionsProps) => {
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

                <ul>
                    {alternatives.map(item => 
                    <ListQuestion key={item.letter}>
                        <AlternativesButton>
                            {item.letter}
                        </AlternativesButton>

                        <p>{item.text}</p>
                        
                        {item.file && <img src={item.file} />}

                    </ListQuestion>)}

                    <h1>{correctAlternative}</h1>
                </ul>
            </ContainerQuestion>
        </Container>
    )
}