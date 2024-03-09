"use client"

import { Quiz } from "@/components/Quiz";
import { Resultados } from "@/components/Resultados";
import { questionList } from "@/data/questionList";
import { useState } from "react";

export default function Home() {
  const title: string = 'Quiz Sobre Culinária'
  const clasNameAll: string = 'p-5 text-black bg-gray-300 lg:w-[550px]';
  const header: string = 'rounded-t-md border-b border-black font-bold text-lg"';
  const footer: string = 'rounded-b-md border-t border-black text-center';

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [todasRespostas, setTodasRespostas] = useState<number[]>([]);
  const [fim, setFim] = useState(false);

  function receberResposta(resposta: number) {
    setTodasRespostas([...todasRespostas, resposta]);
    if (questionList[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFim(true);
    };
  };

  function reiniciar() {
    setCurrentQuestion(0);
    setTodasRespostas([]);
    setFim(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto mt-[5em]">
      <div className="">
        <div className={`${clasNameAll} ${header}`}> {title}</div>

        <div className={`${clasNameAll}`}>
          {!fim && <Quiz
            questions={questionList[currentQuestion]}
            mandarResposta={receberResposta}
          />}
          {fim && <Resultados 
            questoes={questionList}
            respostas={todasRespostas}
          />}
        </div>
        
        <div className={`${clasNameAll} ${footer}`}>
          {!fim &&
            <div>
              {currentQuestion + 1} de {questionList.length} pergunta{questionList.length > 1 ? 's' : ''}
            </div>
          }
          {fim &&
            <button
              onClick={reiniciar}
              className={`bg-blue-600 py-2 px-3 rounded-md text-white`}>Reiniciar Quiz
            </button>
          }
        </div>
      </div>
    </div>
  );
}
