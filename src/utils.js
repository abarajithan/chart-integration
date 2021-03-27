const Utils = {
    formatDate : (date) => {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1 > 9) ? date.getMonth()+1 : "0"+(date.getMonth()+1);
        return year + '-' + month + '-' +date.getDate();
    }
}

export default Utils;