import { useCronometroStore } from "./stores/use-cronometro-store";

const decrementarTempo = () => {
  useCronometroStore.setState((estado) => ({
    tempoEmSegundos: estado.tempoEmSegundos - 1,
  }));
};

const redefinirTempo = () => {
  useCronometroStore.setState((estado) => ({
    tempoEmSegundos: estado.modoCronometro.tempoInicialEmSegundos,
  }));
};

export const computarContagemRegressiva = () => {
  const tempoAtual = useCronometroStore.getState().tempoEmSegundos;

  if (tempoAtual > 0) {
    decrementarTempo();
  } else {
    redefinirTempo();
  }
};
