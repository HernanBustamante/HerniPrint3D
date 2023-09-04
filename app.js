const express= require('express');
const path= require('path');

const app= express();

const port= process.env.PORT || 3001;

const publicFolderPath= path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) );

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});