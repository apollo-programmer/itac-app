const fs = require('fs');
const crypto = require('crypto');
const { publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const pub = publicKey.export({ type: 'spki', format: 'pem' }).replace(/\n/g, '\\n');
const env = `DATABASE_URL="postgresql://affine:affine@localhost:5432/affine"\nREDIS_SERVER_URL="redis://localhost:6379"\nAFFINE_PRO_PUBLIC_KEY="${pub}"\n`;
fs.writeFileSync('.env', env);
fs.writeFileSync('packages/backend/server/.env', env);
console.log('✅ Đã nạp khóa RSA thành công và chuẩn xác 100%!');
