import { Request, Response } from "express";
import { mysqlDB } from './../../database/connect';



export default (request:Request, response:Response) => {
    mysqlDB.query('SELECT * FROM champions', (err, results, fields) => {
        if (err)
        {
            response.send(err);
        }

        response.send(results);
    })
}