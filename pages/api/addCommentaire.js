import commentaires from '../../components/commentaires';

export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			commentaires.push(request.body);

			response.status(200).json({ message: 'Commentaire ajouter avec succès' });
		} catch (error) {
			response.status(500).json({ error: "Une erreur est survenue lors de l'ajout du commentaire." });
		}
	} else {
		response.status(405).json({ error: 'Méthode non autorisée.' });
	}
}
