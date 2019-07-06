module.exports = (app) =>{

    app.route("/cadastro").post(function(req, res){
        res.end("Olá mundo");
        console.log(req + "Recebi a requisição");
    });
    app.get("/", function(req, res){
        res.end("Olá mundo");
        res.status(500);
        console.log(req + "Recebi a requisição");
    })
  
}