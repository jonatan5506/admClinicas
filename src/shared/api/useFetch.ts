import { useEffect, useState } from "react";

interface IUseFecth {
  url: string;
}

export function useFetch<T>({ url }: IUseFecth) {
  const [dados, setDados] = useState<T | null>(null);
  const [erro, setErro] = useState("");

  useEffect(
    () => {
      fetch(`http://localhost:3006/${url}`)
        .then(res => res.json())
        .then(dados => setDados(dados))
        .catch(erro => setErro(erro));
    },
    [url]
  );

  return { dados, erro };
}
