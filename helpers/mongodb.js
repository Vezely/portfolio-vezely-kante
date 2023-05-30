import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		'mongodb+srv://VG:zBAm4CGD9JRI6neK@atlascluster.zft2ydg.mongodb.net/dbPortfolio?retryWrites=true&w=majority',
	);
	return client;
}
