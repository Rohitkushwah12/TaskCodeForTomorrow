const db = require("../config/database");

class Category {
  static async create(name) {
    try {
      const result = await db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name]
      );
      return result.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
        
      const categories = await db.query('SELECT * FROM categories');
      return categories;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, name) {
    try {
      await db.query("UPDATE categories SET name = ? WHERE id = ?", [name, id]);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const categoryDeleteQuery = `
    DELETE FROM categories
    WHERE id = ${id} And ${id} not in (
        SELECT services.category_id 
        FROM 
        services
    )
`;
      await db.query(categoryDeleteQuery);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Category;
