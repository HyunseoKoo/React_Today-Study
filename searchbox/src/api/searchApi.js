import { Axios } from "./@core"


const SearchApi = {
    getSearchData(params) {
        return Axios.get('/search', {
            params: {
                key: params
            }
        })
    }
}

export default SearchApi