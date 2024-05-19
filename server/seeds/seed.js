const mongoose = require('mongoose');
const db = require('../config/connection');
const { User, Cat, Job } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const catData = require('./catData.json');
const jobData = require('./jobsData.json');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Cat', 'cats');
    await cleanDB('Job', 'jobs');
    // await User.insertMany(userData);
    // await Cat.insertMany(catData);
    // await Job.insertMany(jobData);
  // Create users
  const users = await User.create(userData);

  // Create jobs
  await Job.create(jobData);

  // Map user emails to user IDs for quick access
  const userEmailToIdMap = {};
  users.forEach(user => {
      userEmailToIdMap[user.email] = user._id;
  });

  // Create cats with correct owners
  const cats = catData.map(cat => ({
      ...cat,
      owner: users[Math.floor(Math.random()*users.length)]._id 
  }));
  await Cat.create(cats);

  console.log('Seeding completed!');
  process.exit(0);
});


