import { useState } from "react";
import { Container, LiQuestion, UlQuestions } from "./style/style";
import { getQuestiosMatematica } from "../../domain/questions/matematica/matematica";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
    
    const [questionsOfYear, setQuestionsOfYear] = useState<any[]>([]);

    const yearsEnem = [
        { id: 1, year: 2009 },
        { id: 2, year: 2010 },
        { id: 3, year: 2011 },
        { id: 4, year: 2012 },
        { id: 5, year: 2013 },
        { id: 6, year: 2014 },
        { id: 7, year: 2015 },
        { id: 8, year: 2016 },
        { id: 9, year: 2017 },
        { id: 10, year: 2018 },
        { id: 11, year: 2019 },
    ];

    const handleClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const year = e.currentTarget.value;

        const response = await getQuestiosMatematica({ year: Number(year) });
        
        if (Array.isArray(response.data)) {
            setQuestionsOfYear(response.data);
        } else if (response.data.questions) {
            setQuestionsOfYear(response.data.questions);
        } else {
            console.error("Formato inesperado de dados", response.data);
        }
    };
    

    return (
        <Container>
            <h1>Selecione o ano que quer fazer as questões: </h1>

            <UlQuestions>
                {yearsEnem.map(item => (
                    <LiQuestion key={item.id}>
                        <button value={item.year} onClick={handleClickButton}>
                            {item.year}
                        </button>
                    </LiQuestion>
                ))}
            </UlQuestions>

            <Outlet context={questionsOfYear} />
        </Container>
    );
};
