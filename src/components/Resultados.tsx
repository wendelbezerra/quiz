import { TemplateQuestion } from "@/types/Questions"

type Props = {
    questoes: TemplateQuestion[];
    respostas: number[];
}

export function Resultados({ questoes, respostas }: Props) {

    const estilizacao = `flex gap-2 items-center mx-5`
    return (
        <div>
            {questoes.map((item, key) => (
                <div key={key}>
                    <div className="font-bold my-2">{item.question}</div>

                    {respostas[key] === item.response &&
                        <div className={estilizacao}><div className="text-green-600">Acertou!</div><div className="font-bold text-xs">Resposta correta:</div>{item.options[item.response]}</div>}

                    {respostas[key] !== item.response &&

                        <div className="flex flex-col">
                            <div className={estilizacao}>
                                <div className="text-red-600">Errou!</div>
                                <div className="font-bold text-xs">Resposta correta:</div>{item.options[item.response]}
                            </div>
                            <div className="font-bold text-xs mx-5">Sua resposta: {item.options[respostas[key]]}</div>
                        </div>
                    }


                </div>
            ))}
        </div>
    )
};

//resposta <div>{item.options[respostas[key]]}</div>