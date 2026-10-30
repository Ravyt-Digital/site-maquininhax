import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateNet} from '../src/lib/calculator.ts';
test('valor líquido reconcilia venda e desconto arredondado aos centavos',()=>{
 assert.deepEqual(calculateNet(1000,10),{gross:1000,fee:100,net:900});
 assert.deepEqual(calculateNet(100,0),{gross:100,fee:0,net:100});
 const result=calculateNet(98.91,3.15);
 assert.deepEqual(result,{gross:98.91,fee:3.12,net:95.79});
 assert.equal(Math.round((result.fee+result.net)*100),9891);
});
test('entradas incompletas, inválidas e fora dos limites não geram uma simulação',()=>{
 for(const [amount,rate]of [[NaN,10],[100,NaN],[0,10],[-1,10],[Infinity,10],[100,-1],[100,100],[1000001,10]])assert.equal(calculateNet(amount,rate),null);
 assert.deepEqual(calculateNet(0.01,0),{gross:0.01,fee:0,net:0.01});
});
