import { create } from "zustand";
import { TaskListStoreType } from "../types/task-list-store.type";

export const taskListStore = create<TaskListStoreType>((set) => ({
  taskList: [],

  updateTaskList: (updatedTaskList) =>
    set(() => ({ taskList: updatedTaskList })),
}));
