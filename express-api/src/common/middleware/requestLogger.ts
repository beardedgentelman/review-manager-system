import {pino} from "pino";
import {pinoHttp} from "pino-http";

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty', // Optional: Pretty-print logs during development
    options: {
      colorize: true, // Enable colors for better readability
    },
  },
});

// Use Pino HTTP middleware with custom settings
export default pinoHttp({
  logger,
  customLogLevel: (req, res, err) => {
    if (err || (res?.statusCode && res.statusCode >= 500)) return 'error';
    if (res?.statusCode && res.statusCode >= 400) return 'warn';
    return 'info';
  },
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
    }),
    res: (res) => ({
      statusCode: res.statusCode,
    }),
  },
  customSuccessMessage: (req) => `Request to ${req.method} ${req.url} completed successfully`,
  customErrorMessage: (req, _, err) => `Error on ${req.method} ${req.url}: ${err.message}`,
});