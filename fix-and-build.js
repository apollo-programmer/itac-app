const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process');

console.log('⏳ 1/3: Đang đúc khóa RSA mới...');
const { publicKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
const pub = publicKey.export({ type: 'spki', format: 'pem' }).replace(/\n/g, '\\n');

console.log('⏳ 2/3: Đang ghi vào file cấu hình...');
const envData = `DATABASE_URL="postgresql://affine:affine@localhost:5432/affine"\nREDIS_SERVER_URL="redis://localhost:6379"\nAFFINE_PRO_PUBLIC_KEY="${pub}"\n`;
fs.writeFileSync('.env', envData);
fs.writeFileSync('packages/backend/server/.env', envData);

console.log('⏳ 3/3: Đang ép hệ thống nuốt khóa và biên dịch lại lõi...');
process.env.AFFINE_PRO_PUBLIC_KEY = pub;
execSync('yarn affine build -p @affine/server', { stdio: 'inherit', env: process.env });

console.log('✅ HOÀN TẤT: Mã nguồn đã được bọc giáp bảo mật!');
