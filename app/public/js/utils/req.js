var req = (method) => {
    var head = (method) => {
        return (data) => {
            if (method === "GET") {
                return {
                    credentials: "omit",
                    method: method
                };
            }
            return {
                body: JSON.stringify(data),
                credentials: "omit",
                headers: {
                    "content-type": "application/json"
                },
                method: method,
                mode: "cors",
                redirect: "follow"
            };
        };
    }

    return (url) => {
        return (data) =>  {
            return fetch(url, head(method)(data)).then(response => response.json());
        }
    }
}


