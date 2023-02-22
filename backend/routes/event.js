const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
router.get('/:eventId/price', async (req, res) => {
    try {
      const event = await Event.findById(req.params.eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      const price = event.price;
      return res.json({ price });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error' });
    }
  });
  


module.exports = router;
