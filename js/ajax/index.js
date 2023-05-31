class fetchData {
    constructor(){
        console.log("Making request");
    }

    makeRequest() {
        $.when(
            $.ajax({ // First Request
                url: 'http://jsonplaceholder.typicode.com/posts',
                type: 'POST',
                data: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                cache: false,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                success: (response) => { // Use arrow function to preserve the class instance
                    this.result1 = response;
                }
            }),
            $.ajax({ // Second Request
                url: 'http://jsonplaceholder.typicode.com/posts',
                type: 'POST',
                data: JSON.stringify({
                    title: 'bar',
                    body: 'foo',
                    userId: 2,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                cache: false,
                success: (response) => {
                    this.result2 = response;
                }
            }),
            $.ajax({ // Third Request
                url: 'http://jsonplaceholder.typicode.com/posts',
                type: 'POST',
                data: JSON.stringify({
                    title: 'pranav',
                    body: 'ok',
                    userId: 3,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                cache: false,
                success: (response) => {
                    this.result3 = response;
                }
            })
        ).then(() => {
            console.log(this.result1);
            console.log(this.result2);
            console.log(this.result3);
        });
    }
}

const obj = new fetchData();
obj.makeRequest();