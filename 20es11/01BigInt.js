// es11 之前最大的int值
const maxint = Number.MAX_SAFE_INTEGER
console.log(maxint+100000000000000000000);

const bigint = 900719925474099105n
console.log(bigint+100245716n);
console.log(bigint+BigInt(100245716));