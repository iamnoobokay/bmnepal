function MyLibrary(selector){
    let self = document.querySelector(selector);

    self.text = function(text){
        if(text){
            self.innerText = text;
            return self;
        }
        return self.innerText;
    }

    self.html = function(){
        return self.innerHTML;
    }

    self.css = function(styles){
        for(let key in styles){
            self.style[key] = styles[key];
        }
        return self;
    }
    
    self.classAdd = function(classes){
        self.className = classes;
        return self;
    }

    self.addElement = function(element){
        let div = document.createElement(element);
        self.appendChild(div);
    }

    self.ajaxGet = function(url){
        fetch(url)
            .then((response) => response.json())
            .then((json) => console.log(json));

        return self;
    }

    self.ajaxPost = function(url,data){
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        return self;
    }
    return self;
}