const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/destinatarioRoutes');

const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/api/dest', usuarioRoutes);

app.listen(port, () => {
    console.log(`service running on port ${port}`);
});
