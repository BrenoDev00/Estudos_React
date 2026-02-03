import { create } from "zustand";
import { MODO_CRONOMETRO } from "../constants";
import { computarContagemRegressiva } from "../utils";

export const useCronometroStore = create((set) => ({
  modoCronometro: MODO_CRONOMETRO.FOCO,
  tempoEmSegundos: MODO_CRONOMETRO.FOCO.tempoInicialEmSegundos,

  setModoCronometro: (novoModo) => {
    set({
      modoCronometro: novoModo,
      tempoEmSegundos: novoModo.tempoInicialEmSegundos,
    });
  },

  intervaloId: null,

  iniciarCronometro: () => {
    const novoId = setInterval(computarContagemRegressiva, 1000);

    set({
      intervaloId: novoId,
    });
  },
}));
