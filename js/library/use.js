console.log(MyLibrary("#app").text("Bookmundi"));
console.log(MyLibrary("#app").css({
    fontSize:"50px",
    color:"red",
}).text());

MyLibrary("#app").classAdd("newClass").html();
MyLibrary("#app").addElement("table");

MyLibrary("#app").ajaxGet("https://jsonplaceholder.typicode.com/users")

MyLibrary("#app").ajaxPost("http://jsonplaceholder.typicode.com/posts",{title: 'foo',
    body: 'bar',
    userId: 1})

MyLibrary("#db").get_set();