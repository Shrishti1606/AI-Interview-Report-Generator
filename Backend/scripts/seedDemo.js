// scripts/seedDemo.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = require('../src/models/user.model');

async function seed() {
    await mongoose.connect(process.env.MONGOOSE_URI);
    const existing = await userModel.findOne({ email: process.env.DEMO_EMAIL });
    if (existing) {
        console.log('Demo user already exists');
        process.exit(0);
    }
    const hashed = await bcrypt.hash(process.env.DEMO_PASSWORD, 10);
    await userModel.create({
        username: 'demo_user',
        email: process.env.DEMO_EMAIL,
        password: hashed
    });
    console.log('Demo user created!');
    process.exit(0);
}

seed();