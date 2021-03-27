const API = {
    async getChartData (options) {
        let url = new URL("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow")
        for(let key in options){
            url.searchParams.append(key, options[key]);
        }
        let response = await fetch(url)
        response = await response.json()
        return response;
    }
}
export default API;