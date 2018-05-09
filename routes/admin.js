const express = import('express');
const router = express.Router();


router.get('/', (req, res) => res.render('admin'));

router.get('/api/list-all', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send();
});

export default { router };
