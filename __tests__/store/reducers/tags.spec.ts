import { tagsReducer } from '../../../src/store/reducers/tags';
import ActionTypes from '../../../src/store/actions/types';
import { TagsStateType, TagType } from '../../../src/types';

describe('Tags Reducer Tests', () => {
  let initialState = {} as TagsStateType;
  const tag: TagType = { name: 'tagName', count: 5 };
  beforeEach(() => {
    initialState = {
      allTags: [],
      tags: [],
      selectedTags: ['All'],
    };
  });
  it('should set allTags and tags on state with given payload', () => {
    const res = tagsReducer(initialState, { type: ActionTypes.GET_ALL_TAGS, payload: [tag] });
    expect(res.allTags.length).toEqual(1);
    expect(res.allTags[0].name).toEqual('tagName');
    expect(res.allTags[0].count).toEqual(5);
    expect(res.tags.length).toEqual(1);
    expect(res.tags[0].name).toEqual('tagName');
    expect(res.tags[0].count).toEqual(5);
  });
  it('should set selectedTags on state with given payload when selectedTags already has All in it', () => {
    const res = tagsReducer(initialState, { type: ActionTypes.INCLUDE_SELECTED_TAGS, payload: 'tag' });
    expect(res.selectedTags.length).toEqual(1);
    expect(res.selectedTags[0]).toEqual('tag');
  });
  it('should set selectedTags on state with given payload is equal to All ', () => {
    initialState = {
      allTags: [],
      tags: [],
      selectedTags: ['tag'],
    };
    const res = tagsReducer(initialState, { type: ActionTypes.INCLUDE_SELECTED_TAGS, payload: 'All' });
    expect(res.selectedTags.length).toEqual(1);
    expect(res.selectedTags[0]).toEqual('All');
  });
  // eslint-disable-next-line max-len
  it('should set selectedTags on state with given payload is not equal to All and doesnt already have All in it', () => {
    initialState = {
      allTags: [],
      tags: [],
      selectedTags: ['tag1', 'tag2'],
    };
    const res = tagsReducer(initialState, { type: ActionTypes.INCLUDE_SELECTED_TAGS, payload: 'tag3' });
    expect(res.selectedTags.length).toEqual(3);
    expect(res.selectedTags[0]).toEqual('tag1');
    expect(res.selectedTags[1]).toEqual('tag2');
    expect(res.selectedTags[2]).toEqual('tag3');
  });
  it('should set selectedTags on state with filtering', () => {
    initialState = {
      allTags: [],
      tags: [],
      selectedTags: ['tag1', 'tag2', 'tag3'],
    };
    const res = tagsReducer(initialState, { type: ActionTypes.EXCLUDE_SELECTED_TAGS, payload: 'tag3' });
    expect(res.selectedTags.length).toEqual(2);
    expect(res.selectedTags[0]).toEqual('tag1');
    expect(res.selectedTags[1]).toEqual('tag2');
  });
  it('should set tags on state', () => {
    const res = tagsReducer(initialState, { type: ActionTypes.FILTER_TAGS, payload: [tag] });
    expect(res.tags.length).toEqual(1);
    expect(res.tags[0].count).toEqual(5);
    expect(res.tags[0].name).toEqual('tagName');
  });
});
