import axios from "axios";
//Higher-order ducks

import {
  makeType,
  asyncMac,
  createReducer,
  reduceReducers
} from "./ducks-helper";
import { loadHOR, createHOR, updateHOR, removeHOR } from "./hors";

export const crudHOD = (moduleName, baseURL) => {
  const t = makeType(moduleName);

  const LOAD = t("load", true);
  const CREATE = t("create", true);
  const UPDATE = t("update", true);
  const REMOVE = t("remove", true);

  const loadAc = asyncMac(LOAD);
  const createAc = asyncMac(CREATE);
  const updateAc = asyncMac(UPDATE);
  const removeAc = asyncMac(REMOVE);

  const initialState = {
    data: {},
    error: null
  };

  const rLoad = createReducer(initialState, loadHOR(LOAD));
  const rCreate = createReducer(initialState, createHOR(CREATE));
  const rUpdate = createReducer(initialState, updateHOR(UPDATE));
  const rRemove = createReducer(initialState, removeHOR(REMOVE));

  const load = () => ({
    actions: loadAc,
    request: async () => {
      const result = await axios.get(baseURL);
      if (result.status === 200 && result.data) {
        const obj = result.data.reduce((ac, a) => {
          const { id, ...withoutId } = a;
          return { ...ac, [id]: withoutId };
        }, {});

        return obj;
      }
    }
  });

  const create = element => ({
    actions: createAc,
    request: async () => {
      const result = await axios.post(baseURL, element);
      if (result.status === 200 && result.data) {
        const { id, ...withoutId } = result.data;

        return { [id]: { ...withoutId } };
      }
    }
  });

  const update = (id, element) => ({
    actions: updateAc,
    request: async () => {
      const result = await axios.put(`${baseURL}/${id}`, element);
      if (result.status === 200 && result.data) {
        return result.data;
      }
    }
  });

  const remove = id => ({
    actions: removeAc,
    request: async () => {
      const result = await axios.delete(`${baseURL}/${id}`);
      if (result.status === 200 && result.data) {
        return id;
      }
    }
  });

  return {
    reducer: reduceReducers(rLoad, rCreate, rUpdate, rRemove),
    load,
    create,
    update,
    remove
  };
};
