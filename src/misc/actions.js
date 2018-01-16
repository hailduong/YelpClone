export const SEARCH = "SEARCH";
export const AUTOCOMPLETE = "AUTOCOMPLETE";
export const SET_PAGE = "SET_PAGE";

export const search = (postObject) => {
	return (dispatch) => {
		jQuery.ajax({
			url: 'ajax/search',
			method: 'POST',
			data: postObject,
			crossDomain: true,
			success: (data) => {
				console.log('Searched and received data.');
				if (data.statusCode === 200) {
					dispatch({
						type: SEARCH,
						data: data.data,
						locationFromLastSearch: postObject.location,
						keywordFromLastSearch: postObject.term
					})
				} else {
					// Should handle errors here. 
					// However, for a quick solution, I'll just mark it at not found 
					dispatch({
						type: SEARCH,
						data: [],
						locationFromLastSearch: postObject.location,
						keywordFromLastSearch: postObject.term
					});
					console.warn("For a quick solution, I'll just mark it at not found, but we should handle errors here:", data);
				}
			},
			error: (error) => {
				console.warn(error)
			}
		})
	}
};

export const autoComplete = (currentKeyword) => {
	return (dispatch) => {
		jQuery.ajax({
			url: 'ajax/autocomplete',
			method: 'POST',
			data: {text: currentKeyword},
			crossDomain: true,
			success: (data) => {
				if (data.statusCode === 200) {
					dispatch({
						type: AUTOCOMPLETE,
						data: {
							autoSuggestData: data.data
						}
					})
				}
			},
			error: (error) => {
				console.warn(error)
			}
		})
	}
};

export const setPage = (page) => {
	return {
		type: SET_PAGE,
		data: page
	}
};