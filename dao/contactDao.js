const sendEmail = require("../mailer");

class contactDao {
	static async addQuery(data) {
		try {
			const contact = {
				fullname: data.name,
				email: data.email,
				subject: data.subject,
				body: data.body,
			};
			sendEmail({
				subject: `Query - ${contact.subject}`,
				html: `<div>\
              <p>${contact.body}</p>\
              <p>Your's turly</p>\
              <p>${contact.fullname}</p>\
              </div>`,
				to: "dundlodgirlsschool@gmail.com",
				from: process.env.EMAIL,
				replyTo: `${contact.email}`,
			});
			sendEmail({
				subject: `Query - ${contact.subject}`,
				html: `<div>\
              <p>${contact.body}</p>\
              <p>Your's turly</p>\
              <p>${contact.fullname}</p>\
              </div>`,
				to: `${contact.email}`,
				from: process.env.EMAIL,
				replyTo: "dundlodgirlsschool@gmail.com",
			});
			console.log(contact);
			return contact;
		} catch (err) {
			console.error(`Unable to insert student in StudentRegDAO: ${err}`);
			return { error: err };
		}
	}
}

module.exports = contactDao;
