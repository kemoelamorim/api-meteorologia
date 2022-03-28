import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', ()=>{
  it('should return the normalized forecast front the StormGlass service', async ()=>{
    const lat = -33.4934;
    const log = 4934;
    const stormGlass = new StormGlass(lat, log);
    const response = await stormGlass.fatchPoints(lat, log);
    expect(response).toEqual({})
  })
})
