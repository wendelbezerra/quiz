import { questionList } from "@/data/questionList";
import { TemplateQuestion } from "@/types/Questions";
import { useState } from "react";

type Props = {
    questions: TemplateQuestion;
    mandarResposta: (answer:number) => void;
}

export function Quiz({questions, mandarResposta}:Props) {

    const classe = "border py-2 px-3 my-3 bg-blue-400 rounded-md ";

    const [resposta, setResposta] = useState<number | null>(null);
    const [bloquear, setBloquear] = useState<boolean>(false);

    function click(key:number) {
        if(resposta === null) {
            setResposta(key);
            setBloquear(true);
            setTimeout(()=>{
                mandarResposta(key);
                setResposta(null);
                setBloquear(false);
            },1000);
        }
    };

    return (
        <div>
            <div className="font-bold text-lg text-justify">{questions.id} - {questions.question}</div>
            <div>{questions.image === true && 
                <div className="flex items-center justify-center"><img className="w-[20em]" src={`/assets/images/${questions.id}.png`} alt="" /></div>
            }</div>
            <div className="">
                {questions.options.map((item,key) => (
                    <div key={key}
                    onClick={() => click(key)}
                    className={`${classe} 
                    ${!bloquear && `cursor-pointer hover:bg-blue-200 `}
                    ${bloquear && resposta === key && resposta === questions.response && `bg-green-300`}
                    ${bloquear && resposta === key && resposta !== questions.response && `bg-red-300`}
                    `}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}