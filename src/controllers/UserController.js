export const registerUser = async (req, res) => {
  try {
    res.status(200).json("User Register");
  } catch (error) {
    res.status(404).json("Error Sent");
  }
};
export const loginUser = async (req, res) => {
  try {
    res.status(200).json("User Login");
  } catch (error) {
    res.status(404).json("Error Sent");
  }
};
export const getUser = async (req, res) => {
  try {
    res.status(200).json("User Dashboard");
  } catch (error) {
    res.status(404).json("Error Sent");
  }
};
