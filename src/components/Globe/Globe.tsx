/* eslint-disable @next/next/no-img-element */
import { Rectangle } from "../../styles/global";
import { GlobeContainer, TextContainer } from "./Globe.styled";

export function Globe() {
    return(
        <>
            <GlobeContainer>
                <TextContainer>
                    <h1>Teste técnico</h1>
                    <Rectangle />
                    <p>Controle suas contas nacionais e internacionais em um único lugar!</p>
                </TextContainer>
                <img src="/globe.svg" alt="Globo"/>
            </GlobeContainer>
        </>
    )
}