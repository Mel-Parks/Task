const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect()
  .then(async () => {
    const tables = await prisma.$queryRaw`SHOW TABLES`;
    console.log('📋 Tables dans la base de données :');
    tables.forEach(t => {
      const tableName = t[`Tables_in_${process.env.DATABASE_URL.split('/').pop() || 'taskflow'}`];
      console.log(`   - ${tableName}`);
    });
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erreur :', e.message);
    process.exit(1);
  });