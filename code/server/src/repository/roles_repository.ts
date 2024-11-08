import MySQLService from "../service/mysql_service.js";

class RolesRepository {
	// nom de la table en SQL
	private table = "roles";

	// récuperer tous les enregistrements
	public selectAll = async () => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		const sql = `
            SELECT 
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
            ;
        `;

		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			const results = await connection.execute(sql);
			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};
}

export default RolesRepository;
