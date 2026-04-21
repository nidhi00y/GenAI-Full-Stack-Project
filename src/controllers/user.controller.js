import express from 'express';
import userModel from '../models/user.model.js';
import crypto from 'crypto';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';
import cookies from 'cookie-parser';

async function Register(req, res) {
    const {name,email,password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(201).json({ message: 'User registered successfully' },token);
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

async function Login(req, res) {
    const {email,password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        const user = await userModel.findOne({ email, password: hashedPassword });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful, Welcome!' },token);
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }

}

export { Register, Login };