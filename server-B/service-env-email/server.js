const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./Routes/emailRoutes');
const { initRabbitMQConsumer } = require('./services/rabbitMQConsumer');

const app = express();
const port = 3013;

app.use(cors());
app.use(express.json());

// Iniciar RabbitMQ y el consumidor
initRabbitMQConsumer().catch(console.error);

/* // Iniciar el scheduler de envíos
emailService.startScheduler(); // Inicia el scheduler para el envío automático de correos */

// Usar las rutas
app.use('/api/email', usuarioRoutes);

app.listen(port, () => {
    console.log(`Service running on port ${port}`);
});
