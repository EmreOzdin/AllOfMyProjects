const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true, // make sure the email is not already taken by another account in our database
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "Password must be at least 6 characters"],
      maxLength: [23, "Password must not exceed 23 characters"],
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdefault-user&psig=AOvVaw10WQ5tjAwWyIKWeeOCDUqP&ust=1690018158059000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjd27G-n4ADFQAAAAAdAAAAABAE",
    },
    phone: {
      type: Number,
      default: "+234",
    },
    bio: {
      type: String,
      maxlength: [23, "Bio must not be more than 250 characters"],
      default: "bio",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
