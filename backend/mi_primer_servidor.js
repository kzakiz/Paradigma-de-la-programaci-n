const express = require(`express`);
const app = express() ;

app.get('/', (req, res) => {
    res.send(`Hola cabrones`);
});

app.get('/json', (req, res) => {
    res.json({ mensaje: '¡Hola cabrones en formato JSON!, no me importa lo que piensen'});
});

app.get('/inf', (req, res) => {
    res.json({ Nombre: 'Juan Esteban', Apellido: 'Castañeda Patiño', Edad: '17 años', Escuela: 'Salle Campo Amor'});
});

app.listen(3000, () => {
    console.log(`Servidor escuchando el puerto en 3000`);
});
