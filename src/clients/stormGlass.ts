import { AxiosStatic } from 'axios';

export class StormGlass{
  constructor(protected request: AxiosStatic){}
  public async fatchPoints(lat: number, log:number): Promise<{}>{
    this.request.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`)
    return Promise.resolve({});
  }
}