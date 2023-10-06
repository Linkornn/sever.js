// const express = require('express');
// const mongoose = require('mongoose');
// const List = require('./List'); //แก้
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// mongoose.connect('mongodb+srv://admin:admin1234@todolist.s5eoi4m.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(cors());
// app.use(express.json());

// // GET all list
// app.get('/api/lists', async (req, res) => {
//   try {
//     const lists = await List.find();
//     res.json(lists);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // POST a new lists
// app.post('/api/lists', async (req, res) => {
//   try {
//     const list = new List(req.body);
//     await list.save();
//     res.status(201).json(list);
//   } catch (err) {
//     res.status(400).json({ error: 'Bad request' });
//   }
// });

// // DELETE a lists
// app.delete('/api/lists/:id', async (req, res) => {
//   try {
//     await List.deleteOne({ _id: req.params.id });
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const List = require('./List'); // Make sure 'List.js' contains the schema definition
const cors = require('cors');
require('dotenv').config(); // Load environment variables from a .env file

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

// GET all lists
app.get('/api/lists', async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new list
app.post('/api/lists', async (req, res) => {
  try {
    const list = new List(req.body);
    await list.save();
    res.status(201).json(list);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Bad request' });
  }
});

// DELETE a list
app.delete('/api/lists/:id', async (req, res) => {
  try {
    await List.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
