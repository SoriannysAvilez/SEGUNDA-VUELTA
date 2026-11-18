
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

// Primera ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a la API de Segunda Vuelta'
  });
});

// Ruta para comprobar que el servidor funciona
app.get('/api/health', (req, res) => {
  res.json({
    estado: 'Servidor funcionando correctamente'
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
