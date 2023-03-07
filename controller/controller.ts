import express, { Express, Request, Response } from 'express';
import { Soldier } from '../repository/repo';

export function checkHealth (req:Request,res:Response) {
    res.send("I am alive!"); 
  };

export async function addSoldier (req:Request,res:Response) {
    try{
        const result = new Soldier(req.body);
        console.log(result); 
        await result.save();
        res.status(201).json(result);
      }
      catch {
        res.status(400).send("bad request, wrong fields"); 
      }
};

export async function getSoldierByID (req:Request,res:Response) {
    const id2 = req.params.id;
    const SoldierByID = await Soldier.findById({ _id:id2});
    if (SoldierByID == null){
      res.send(404);
    }
    else{
      console.log(SoldierByID); 
      res.status(200).send(SoldierByID);
    }
}; 

export async function getSoldierByQuery (req:Request,res:Response) {
  const SoldierByQuery = await Soldier.find(req.query);
  if (SoldierByQuery.length == 0){
    res.send(404);
  }
  else{
    console.log(SoldierByQuery); 
    res.status(200).send(SoldierByQuery);
  }
};
