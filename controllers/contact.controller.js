const contactDAO = require("../dao/contactDao");

class ContactCtrl {
	static async postQuery(req, res, next) {
		try {
			const contact = await contactDAO.addQuery(req.body);
			res.json({ status: "success" });
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	}
}

module.exports = ContactCtrl;
