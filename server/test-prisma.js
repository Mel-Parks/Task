const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log('✅ Connexion Prisma réussie !');
    console.log('📍 URL utilisée :', process.env.DATABASE_URL);
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erreur Prisma :', e.message);
    process.exit(1);
  });