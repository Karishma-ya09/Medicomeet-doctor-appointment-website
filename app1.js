app.put('/api/appointments/:id', async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
      if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  
      appointment.status = req.body.status;
      await appointment.save();
      res.json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
    