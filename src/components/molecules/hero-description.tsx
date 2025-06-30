import { SubTitle, Title } from "../atoms";

export function HeroDescription() {
  return (
    <div className="max-w-[400px] flex flex-col gap-2">
      <Title>
        Rick and Morty
      </Title>
      <SubTitle>
        Acompanhe malucas viagens no tempo-espaço e por universos paralelos com
        Rick, um cientista com problemas com a bebida, e seu neto Morty, um
        adolescente não tão brilhante quanto o avô.
      </SubTitle>
    </div>
  )
}