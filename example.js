let prices=[300,400,500,600,700];


for(let i=0;i<prices.length;i++)
{
console.log(prices[i]);
let off=prices[i]*0.1;
prices[i]=prices[i]-off;
}
console.log(prices);