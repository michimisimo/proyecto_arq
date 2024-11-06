const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/difusionRoutes');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/api/dif', usuarioRoutes);

app.listen(port, () => {
    console.log(`service running on port ${port}`);
});
