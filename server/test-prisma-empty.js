const { PrismaClient } = require('@prisma/client');

// Tester avec mot de passe vide
const testURLs = [
  'mysql://root:@localhost:3306/mysql',
  'mysql://root:@localhost:3306/',
  'mysql://root:rootpassword@localhost:3306/mysql',
  'mysql://root:rootpassword@localhost:3306/',
];

async function testConnection(url) {
  const prisma = new PrismaClient({
    datasourceUrl: url,
  });
  
  try {
    await prisma.$connect();
    console.log(`✅ Connexion réussie avec : ${url}`);
    const databases = await prisma.$queryRaw`SHOW DATABASES`;
    console.log('   Bases de données :', databases.map(d => d.Database).join(', '));
    await prisma.$disconnect();
    return true;
  } catch (e) {
    console.log(`❌ Échec avec : ${url}`);
    console.log(`   Erreur : ${e.message.split('\n')[0]}`);
    return false;
  }
}

(async () => {
  console.log('🔍 Test des connexions MySQL...\n');
  for (const url of testURLs) {
    const success = await testConnection(url);
    if (success) break;
  }
})();