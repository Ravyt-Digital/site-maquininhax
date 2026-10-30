export function calculateNet(amount:number,rate:number){
  if(!Number.isFinite(amount)||amount<=0||amount>1_000_000||!Number.isFinite(rate)||rate<0||rate>=100) return null;
  const grossCents=Math.round(amount*100);
  const feeCents=Math.round(grossCents*rate/100);
  return {gross:grossCents/100,fee:feeCents/100,net:(grossCents-feeCents)/100};
}
