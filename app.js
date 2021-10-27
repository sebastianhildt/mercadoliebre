const express = require ("express")
    const path = require("path")
    const servidor = express()

    const port = process.env.PORT || 3000;

    const publicFolderPath = path.resolve(__dirname, "./public")
    servidor.use(express.static(publicFolderPath));

    servidor.listen (port, ()=> {
        console.log("Servidor funcionando")
    })

    servidor.get ("/", (req,res) => {
        res.sendFile (path.join (__dirname, "/views/home.html"))
    })


    servidor.get ("/home", (req,res) => {
        res.sendFile (path.join (__dirname, "/views/home.html"))
    })

    servidor.get ("/mis-compras", (req,res) => {
        res.sendFile (path.join (__dirname, "/views/misCompras.html"))
    })

    servidor.get ("/ingresa", (req,res) => {
        res.sendFile (path.join (__dirname, "/views/ingresa.html"))
    })

    servidor.get ("/creaTuCuenta", (req,res) => {
        res.sendFile (path.join (__dirname, "/views/creaTuCuenta.html"))
    })

servidor.get ("/ayuda", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/ayuda.html"))
})

servidor.get ("/vender", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/vender.html"))
})

servidor.get ("/tiendasOficiales", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/tiendasOficiales.html"))
})

servidor.get ("/ofertas", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/ofertas.html"))
})