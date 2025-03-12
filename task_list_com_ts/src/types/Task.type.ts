export interface TaskInterface {
  task: string;
  isEnabledLines: boolean;
  removeTask: (task: string) => void;
  dataTest: string;
}
