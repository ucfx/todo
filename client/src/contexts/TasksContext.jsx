import React, { createContext, useReducer, useEffect } from "react";
import { produce } from "immer";
import ActionTypes from "data/TaskActionTypes";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TASK:
      return produce(state, (draftState) => {
        console.log("action.payload", action.payload);
        draftState.tasks.push(action.payload);
      });

    case ActionTypes.READ_TASKS:
      return {
        tasks: action.payload,
        loading: false,
      };

    case ActionTypes.UPDATE_TASK:
      return produce(state, (draftState) => {
        const taskIndex = draftState.tasks.findIndex(
          (task) => task._id === action.payload._id
        );

        draftState.tasks[taskIndex] = action.payload;
      });

    case ActionTypes.DELETE_TASK:
      return produce(state, (draftState) => {
        const taskIndex = draftState.tasks.findIndex(
          (task) => task._id === action.payload._id
        );
        draftState.tasks.splice(taskIndex, 1);
      });

    default:
      return state;
  }
};

const initialState = {
  tasks: [],
  loading: true,
};

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/task");
      const data = await response.json();

      dispatch({ type: ActionTypes.READ_TASKS, payload: data });
    };

    fetchData();
  }, []);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
