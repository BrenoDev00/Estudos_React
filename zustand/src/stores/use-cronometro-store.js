import {create} from "zustand";
import { MODO_CRONOMETRO } from "../constants";

export const useCronometroStore = create((set) => ({
    modoCronometro: MODO_CRONOMETRO.FOCO,
    tempoEmSegundos: MODO_CRONOMETRO.FOCO.tempoInicialEmSegundos,

    setModoCronometro: (novoModo) => {
        set({
            modoCronometro: novoModo,
            tempoEmSegundos: novoModo.tempoInicialEmSegundos
        })
    } 
})) 