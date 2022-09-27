/* eslint-disable default-param-last */
import ActionTypes from 'store/actions/types';
import { TagsStateType, TagType } from 'types';

const InitialState: TagsStateType = {
  allTags: [],
  tags: [],
  selectedTags: ['All'],
};

type ActionType =
  | {
      type: ActionTypes.GET_ALL_TAGS;
      payload: Array<TagType>;
    }
  | {
      type: ActionTypes.INCLUDE_SELECTED_TAGS;
      payload: string;
    }
  | {
      type: ActionTypes.EXCLUDE_SELECTED_TAGS;
      payload: string;
    }
  | {
      type: ActionTypes.FILTER_TAGS;
      payload: Array<TagType>;
    };

const includeSelectedTagsHelper = (selectedTags: TagsStateType['selectedTags'], payload: string) => {
  if (selectedTags.length > 0 && selectedTags.includes('All')) {
    return [...selectedTags, payload].filter(tag => tag !== 'All');
  }
  if (payload === 'All') return ['All'];
  return [...selectedTags, payload];
};

export const tagsReducer = (state: TagsStateType = InitialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_TAGS:
      return {
        ...state,
        allTags: action.payload,
        tags: action.payload,
      };
    case ActionTypes.INCLUDE_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: includeSelectedTagsHelper(state.selectedTags, action.payload),
      };
    case ActionTypes.EXCLUDE_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: state.selectedTags.filter(item => item !== action.payload),
      };
    case ActionTypes.FILTER_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
};
