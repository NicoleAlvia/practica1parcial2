"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const espacio_parqueo_routes_1 = __importDefault(require("./routes/espacio_parqueo.routes"));
const parqueo_routes_1 = __importDefault(require("./routes/parqueo.routes"));
const vehiculo_routes_1 = __importDefault(require("./routes/vehiculo.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', espacio_parqueo_routes_1.default);
app.use('/api', parqueo_routes_1.default);
app.use('/api', vehiculo_routes_1.default);
/*// Ruta GET para obtener datos desde el servicio REST de otro compañero
app.get('/datos-companero', async (req: Request, res: Response) => {
    try {
      const response = await axios.get('http://192.27.64.1:3000/asignaturas'); // Reemplazar con la dirección IP y el puerto correctos
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos del compañero' });
    }
});*/
exports.default = app;
