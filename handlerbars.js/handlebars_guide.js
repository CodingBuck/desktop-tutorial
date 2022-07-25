function fill_tmeplate(){
    var data={
        title: "why handlebars are useful",
        list: [
            {name: "it enables you to write cleaner code"},
            {name: "it works on both ends"},
            {name: "Compiles templates into JavaScript functions"},
            {name: "it is open source"}
        ],
        footer: "this is a footer"
    };
    var template = handlebars.compile(document.querySelector("#template").innerHTML);
    var filled= template(data);
    document.querySelector("#output").innerHTML = filled;
}