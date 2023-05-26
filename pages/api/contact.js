/**
 * @param {import("next").NextApiRequest} request 
 * @param {import("next").NextApiResponse} response 
 */

 import nodemailer from "nodemailer"; 
 export default function login(request, response) {
    if (request.method === "POST") {
        // Extract the form data from the request body         
        const { prenomNom, email, message } = request.body;
        // Validate the data         
        if (!prenomNom || !email || !message) {
            return response.status(400).json({ message: "Veuillez remplir tous les champs obligatoires." });
        }
        // Create a transport object with SMTP configuration    
        if (isMessageValide(request.body.prenomNom) && isEmailValide(request.body.email) && isMessageValide(request.body.message)) {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "vezelykant@gmail.com",
                    pass: "knoidadtnczlrhdn",
                },
            });
            // Send the email         
            transporter.sendMail({
                from: email,
                to: "vezelykant@gmail.com",
                subject: "Nouveau message du formulaire de contact",
                html: `<p>Nom : ${prenomNom}</p><p>Email : ${email}</p><p>Message : ${message}</p>`,
            }, (error, info) => {
                if (error) {
                    console.log(error);
                    response.status(500).json({ 
                        message: "Une erreur est survenue lors de l'envoi du message." 
                    });
                }else {
                    console.log(info);
                    response.status(200).json({ message: "Votre message a été envoyé avec succès !" });
                }
            }); 

        } 
    } else {
        response.setHeader("Allow", "POST");
        response.status(405).end();
    } 
}

// export default function login(request, response) {

//     if (request.method === 'POST') {
//         if (isMessageValide(request.body.prenomNom) && isEmailValide(request.body.email) && isMessageValide(request.body.message)) {
//             console.log(request.body);
//             response.status(200).end();
//         }
//         else {
//             response.status(400).end();
//         }
//     }
//     else {
//         response.setHeader('Allow', 'POST')
//         response.status(405).end();
//     }
// }

const isMessageValide = (text) => {
    return typeof text === 'string' && !!text;
}

const isEmailValide = (email) => {
    return typeof email === 'string' && !!email &&
    email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}