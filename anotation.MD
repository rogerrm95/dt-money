# Anotações - Módulo 3 #

# React-Hook-Form #
- Quando há necessidade de incluir uma informação no formulário que não venha de um elemento nativo.
- Utilizamos o "control" do useForm().

# Zod #
- enumeração - enum 

# Performance #
## useMemo
- Memorizar o valores computados (variáveis) a fim de evitar uma nova renderização (re-cálculo).
- Memoriza e reavaliação esses valores caso uma de suas depedências sejam alteradas.
## useCallback
- Memorizar funções e as recria caso uma de suas dependências seja alterada;
- Evitando assim, renderizações desnecessárias;

# Fluxo de Renderizações - React #
Sobre o uso do MEMO

Por que que um componente renderiza ?
 * - Hooks changed (mudou estado, contexto, reducer);
 * - Props changed (mudou propriedades);
 * - Parent rerendered (componente pai renderizou);

Qual o fluxo de renderização ?
 * 1. O React recria o HTML da interface daquele component
 * 2. Compara a versão do HTML recriada com a versão anterior
 * 3. SE mudou alguma coisa, ele reescreve o HTML na tela

Memo: Adiciona um passo a mais antes do fluxo acima
 * 0. Hooks changed, Props changed (deep comparison)
 * 0.1 Comparar com a versão anterior dos hooks e props
 * 0.2 SE mudou algo, ele irá permitir a nova renderização...