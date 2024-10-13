import { Container, ContainerQuestion, TextQuestion } from "./style/style";

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
                    <li key={item.letter}>
                        {item.letter}
                    </li>)}

                    <h1>{correctAlternative}</h1>
                </ul>
            </ContainerQuestion>
        </Container>
    )
}