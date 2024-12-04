import styles from './Cronometro.module.scss'
import Botao from "../Botao"
import Relogio from "./Relogio"
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefas'
import { useEffect, useState } from 'react'

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie um cronometro</p>
            Tempo: {tempo}
            <div className={styles.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}