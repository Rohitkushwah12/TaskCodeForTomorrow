const Service = require('../models/serviceModel');

exports.createService = async (req, res) => {
  const { categoryId } = req.params;
  const { name, type, priceOptions } = req.body;
  try {
    
    const serviceId = await Service.create(categoryId, name, type, priceOptions);
    res.status(201).json({ message: 'Service created successfully', serviceId });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getAllServicesByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const services = await Service.getAllByCategory(categoryId);
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateService = async (req, res) => {
  const { serviceId } = req.params;
  const { name, type, priceOptions } = req.body;
  try {
    await Service.update(serviceId, name, type, priceOptions);
    res.status(200).json({ message: 'Service updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteService = async (req, res) => {
  const { serviceId } = req.params;
  try {
    await Service.delete(serviceId);
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
