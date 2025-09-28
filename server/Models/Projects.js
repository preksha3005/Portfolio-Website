import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    githubLink: String,
    liveLink: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Projects", projectSchema);
