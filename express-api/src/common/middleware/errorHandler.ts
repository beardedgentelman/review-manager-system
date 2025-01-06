import type {ErrorRequestHandler, RequestHandler} from "express";
import {StatusCodes} from "http-status-codes";
import {ZodError} from "zod";

const unexpectedRequest: RequestHandler = (_req, res) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
};

const addErrorToRequestLog: ErrorRequestHandler = (err, _req, res, next) => {
  res.locals.err = err;
  next(err);
};

const errorHandler: ErrorRequestHandler = (err, req, res) => {
  if (err instanceof ZodError) {
    // Return a 400 Bad Request with Zod error messages
    res.status(400).json({errors: err.errors});
  } else if (err.code === 'P2025') {
    // Prisma error for resource not found
    res.status(404).json({error: 'Resource not found'});
  } else
    res.status(500).json({error: 'Internal Server Error', details: err.message});
};

export default () => [unexpectedRequest, addErrorToRequestLog, errorHandler];
