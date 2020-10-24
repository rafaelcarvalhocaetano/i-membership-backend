import express from 'express';

class IResponse {
  sendResponse = (response: express.Response, statusCode: any, data: any) => response.status(statusCode).json(data);

}

export const Response = new IResponse();