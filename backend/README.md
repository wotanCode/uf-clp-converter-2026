# # Conversor UF/CLP BACKEND

API REST con NestJS para convertir entre UF y Pesos Chilenos utilizando la tasa del día.

## Setup

```bash
cd backend
npm install
npm run start:dev
```

Servidor disponible en `http://localhost:3000`

## API

### `POST /api/v1/conversion/convert`

#### Request

| Campo    | Tipo     | Valores         |
| -------- | -------- | --------------- |
| `amount` | `number` | Mayor a 0       |
| `from`   | `string` | `"uf"`, `"clp"` |
| `to`     | `string` | `"uf"`, `"clp"` |

#### Response

| Campo     | Tipo     | Descripción                         |
| --------- | -------- | ----------------------------------- |
| `amount`  | `number` | Monto enviado en el request         |
| `from`    | `string` | Moneda de origen                    |
| `to`      | `string` | Moneda de destino                   |
| `result`  | `number` | Resultado de la conversión          |
| `ufValue` | `number` | Valor de la UF utilizado (CLP)      |
| `date`    | `string` | Fecha de la conversión (YYYY-MM-DD) |

#### Ejemplo

```bash
curl -X POST http://localhost:3000/api/v1/conversion/convert \
  -H "Content-Type: application/json" \
  -d '{"amount": 2, "from": "uf", "to": "clp"}'
```

```json
{
  "amount": 2,
  "from": "uf",
  "to": "clp",
  "result": 80187.18,
  "ufValue": 40093.59,
  "date": "2026-04-29"
}
```

#### Errores

| Código | Caso                       |
| ------ | -------------------------- |
| `400`  | Datos de entrada inválidos |
| `500`  | Error interno del servidor |
