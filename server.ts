import app from './app';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: http://localhost:${PORT}`);
});
