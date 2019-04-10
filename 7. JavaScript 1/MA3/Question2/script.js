//Console.log out elements in JSON file
var data = '{"video": [{"id": 12312412312,"name": "Ecuaciones Diferenciales","url": "/video/math/edo/12312412312","author": {"data": [{"name_author": "Alejandro Morales","url": "/author/alejandro-morales","type": "master"}]}}]}';

(function() {
    var mydata = JSON.parse(data);
        console.log(mydata.video[0].id);
        console.log(mydata.video[0].name);  
        console.log(mydata.video[0].url);  
        console.log(mydata.video[0].author.data[0].name_author);
        console.log(mydata.video[0].author.data[0].url);
        console.log(mydata.video[0].author.data[0].type);  
    
})();
