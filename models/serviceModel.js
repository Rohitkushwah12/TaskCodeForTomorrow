const db = require('../config/database');

class Service {
  static async create(categoryId, name, type, priceOptions) {
    try {

      const result = await db.query('INSERT INTO services (category_id, name, type) VALUES (?, ?, ?)', [categoryId, name, type]);
      const serviceId = result.insertId;
      
      // Insert service price options if available
      if (priceOptions) {
        const { duration, price, type } = priceOptions;
          await db.query('INSERT INTO service_price_options (service_id, duration, price, type) VALUES (?, ?, ?, ?)', [serviceId, duration, price, type]);
        }
      
      return serviceId;
    } catch (error) {
      throw error;
    }
  }

  static async getAllByCategory(categoryId) {
    try {
        // get the service under a category and also the price under that service if available
        const services = await db.query('SELECT s.*, sp.* FROM services s LEFT JOIN service_price_options sp ON s.id = sp.service_id WHERE s.category_id = ?', [categoryId]);
        return services;
      } catch (error) {
        throw error;
      }
    }

  static async update(serviceId, name, type, priceOptions) {
    try {
      await db.query('UPDATE services SET name = ?, type = ? WHERE id = ?', [name, type, serviceId]);

      if (priceOptions) {
        // Delete existing price options for the service
        await db.query('DELETE FROM service_price_options WHERE service_id = ?', [serviceId]);
       
        // Insert new price options
        const { duration, price, type } =  priceOptions
          await db.query('INSERT INTO service_price_options (service_id, duration, price, type) VALUES (?, ?, ?, ?)', [serviceId, duration, price, type]);
        }
      
    } catch (error) {
      throw error;
    }
  }

  static async delete(serviceId) {
    try {
      // Delete service price options first
      await db.query('DELETE FROM service_price_options WHERE service_id = ?', [serviceId]);

      // Then delete the service itself
      await db.query('DELETE FROM services WHERE id = ?', [serviceId]);
    } catch (error) {
      throw error;
    }
  }

 
}
module.exports = Service;
