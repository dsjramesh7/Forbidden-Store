const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

// Register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({
        success: false,
        message: "User Already exists with the same email! Try Different one ",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User doesn't exist! Register first.",
      });
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser?.password
    );
    if (!checkPasswordMatch) {
      return res.json({
        success: false,
        message: "Invalid Password! Try again",
      });
    }

    const token = jwt.sign(
      {
        id: checkUser?._id,
        role: checkUser?.role,
        email: checkUser?.email,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged In Successfully",
      user: {
        email: checkUser?.email,
        role: checkUser?.role,
        id: checkUser?._id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

// logout
const logOutUser = async (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out Successfully",
  });
};

// Auth MiddleWare

module.exports = { registerUser, loginUser, logOutUser };
