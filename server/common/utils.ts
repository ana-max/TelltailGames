import {IAdventureData, ISceneData, ITagData} from './types';
import {SURGE_PATH} from './consts';

export const getAdventures = (params: {}): Promise<IAdventureData[]> => {
  const path = '/api/adventures';
  const url = new URL(window.location.toString());
  url.pathname = path;
  const paramToQuery = (paramValue: [string, any]) => url.searchParams.set(...paramValue);
  Object.entries(params).forEach(paramToQuery);

  return fetch(url.toString())
    .then(response => response.json());
};

export const getSceneData = (params: {}): Promise<ISceneData> => {
  const path = '/api/scenes';
  const url = new URL(window.location.toString());
  url.pathname = path;
  const paramToQuery = (paramValue: [string, any]) => url.searchParams.set(...paramValue);
  Object.entries(params).forEach(paramToQuery);

  return fetch(url.toString())
    .then(response => response.json());
};

export const getTag = (params: {}): Promise<ITagData> => {
  const path = '/api/tags';
  const url = new URL(window.location.toString());
  url.pathname = path;
  const paramToQuery = (paramValue: [string, any]) => url.searchParams.set(...paramValue);
  Object.entries(params).forEach(paramToQuery);

  return fetch(url.toString())
    .then(response => response.json());
};

export const createSceneLink = (id: number) => `/scenes/${id}`;

export const createImagePath = (name: string) => `${SURGE_PATH}/images/${name}`;
