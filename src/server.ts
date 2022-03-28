import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { ForecastController } from './controller/forecast';
import './utils/modules-alias';

export class SetupServer extends Server {
  
  constructor(private port = 3000){
    super();
  }

  public init():void {
    this.setupExpress();
    this.setupController();
  }

  private setupExpress():void{
    this.app.use(bodyParser.json())
  }

  public setupController():void {
    const forcastController = new ForecastController();
    this.addControllers([forcastController]);
  }

  public getApp():Application {
    return this.app;
  }
}