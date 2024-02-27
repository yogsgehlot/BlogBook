import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// This function uses asyncHandler to handle asynchronous operations and fetches all blogs based on a query and userId provided in the request.
const getAllBlogs = asyncHandler(async (req, res) => {
  const { query, userId } = req.query;
  //TODO: get all videos based on query, uiserId
});

const postBlog = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  // TODO: get video, upload to cloudinary, create video
});

const getBlogById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: get video by id
});

const updateBlog = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: update video details like title, description, thumbnail
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: delete video
});
