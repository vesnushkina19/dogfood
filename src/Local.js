class Local {
    static getItem(name, flag = false) {
        let data = localStorage.getItem(name);
        if (data) {
            if (flag) {
                try {
                    return JSON.parse(data)
                } catch {
                    return "";
                }
            } else {
                return data;
            }
        }
        return "";
    }
    static setItem(name, data, flag = false) {
        if (flag) {
            localStorage.setItem(name, JSON.stringify(data))
        } else {
            localStorage.setItem(name, data);
        }
    }
}

export default Local;
