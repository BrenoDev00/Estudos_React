import styles from "./styles.module.css";
import { useCronometroStore } from "../../../../stores/use-cronometro-store";

export default function BotaoModo({ children, modoBotao }) {
  const modoCronometro = useCronometroStore((estado) => estado.modoCronometro);
  const setModoCronometro = useCronometroStore(
    (estado) => estado.setModoCronometro,
  );

  const ativo = modoBotao.id === modoCronometro.id;

  return (
    <button
      onClick={() => setModoCronometro(modoBotao)}
      className={`
        ${styles["cronometer-modes__button"]}
        ${ativo && styles["cronometer-modes__button--active"]}
      `}
    >
      {children}
    </button>
  );
}
