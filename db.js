import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://VG:zBAm4CGD9JRI6neK@atlascluster.zft2ydg.mongodb.net/dbPortfolio?retryWrites=true&w=majority';
const dbName = 'dbPortfolio';

let client;

export default async function connectToDatabase() {
	if (!client || !client.isConnected()) {
		try {
			client = await MongoClient.connect(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
		} catch (error) {
			console.error('Erreur de connexion à la base de données :', error);
			throw error;
		}
	}
	return client.db(dbName);
}
