import * as Actions from "./actions";

const initialState = {
	searchData: [],
	autoSuggestData: {},
	locationFromLastSearch: "",
	keywordFromLastSearch: "",
	currentPage: 1,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {

		case Actions.SEARCH: {
			return {
				...state,
				searchData: action.data,
				keywordFromLastSearch: action.keywordFromLastSearch,
				locationFromLastSearch: action.locationFromLastSearch
			};
		}

		case Actions.AUTOCOMPLETE: {
			return {
				...state,
				autoSuggestData: action.data.autoSuggestData
			};
		}

		case Actions.SET_PAGE: {
			return {
				...state,
				currentPage: action.data
			}
		}

		default: {
			return state;
		}
	}
}