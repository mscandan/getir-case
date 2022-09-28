import { companiesReducer } from '../../../src/store/reducers/companies';
import ActionTypes from '../../../src/store/actions/types';
import { CompanyStateType } from '../../../src/types';

describe('Companies Reducer Tests', () => {
  let initialState = {} as CompanyStateType;
  beforeEach(() => {
    initialState = { allCompanies: [] };
  });
  it('should return given companies as allCompanies', () => {
    const company = {
      slug: 'slug',
      name: 'name',
      address: 'address',
      city: 'city',
      state: 'state',
      zip: 'zip',
      account: 1,
      contact: 'contact',
      count: 2,
    };
    const res = companiesReducer(initialState, { type: ActionTypes.GET_ALL_COMPANIES, payload: [company] });
    expect(res.allCompanies.length).toEqual(1);
  });
});
