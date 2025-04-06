const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register/Signup controller
const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        console.log(req.body);

        // Check if user already exists (by email or username)
        const existingUser = await User.findOne({ 
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with same email or username."
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || "user"
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Login Controller
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log(req.body);

        // Check if user exists
        const user = await User.findOne({ username });
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        // Generate JWT token
        const accessToken = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30m" }
        );

        // Send response
        res.status(200).json({
            success: true,
            message: "Login successful",
            accessToken
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {registerUser, loginUser};