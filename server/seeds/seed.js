const db = require('../config/connection');
const { User, Cat, Job } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const catData = require('./catData.json');
const jobData = require('./jobsData.json');

db.once('open', async () => {
    //await cleanDB();
    await cleanDB('User', 'users');
    await cleanDB('Cat', 'cats');
    await cleanDB('Job', 'jobs');


    await User.create(userData);
    await Job.create(jobData)

    for (let i = 0; i < catData.length; i++)
    await Cat.create(catData);
console.log('all done!');
process.exit(0);
});
