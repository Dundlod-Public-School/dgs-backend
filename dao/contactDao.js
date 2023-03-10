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
        subject: "Query",
        text: `${contact}`,
        to: "dundlodgirlsschool@gmail.com",
        from: process.env.EMAIL,
        replyTo: `${contact.email}`,
      });
      sendEmail({
        subject: "Query",
        text: `${contact}`,
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
