import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

let getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: 'Users fetched successfully', users });
    }
    catch (error) {
        return res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
}

let signupUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        let existingUser = User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: 'User added successfully', user: newUser });

    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

let loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign(
            {
                id: user._id, email: user.email, role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '5h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export { getUsers, signupUser, loginUser };