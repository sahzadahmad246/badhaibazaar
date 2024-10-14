import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./../ui/Button";
import { Input } from "./../ui/Input";
import { User, Mail, Camera, Edit, Share2, AlertCircle, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutUser } from "../../actions/userAction";
import ProfileLoader from "./../loaders/profileLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ConfirmationDialog from "./../ui/confirmationDialog";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { loading, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleShareProfile = () => {
    alert("Sharing profile as card image");
  };

  const handleLogoutClick = () => {
    setIsConfirmationOpen(true);
  };

  const handleLogoutConfirm = async () => {
    setIsConfirmationOpen(false);
    setIsLoggingOut(true);
    await dispatch(logoutUser());
    setIsLoggingOut(false);
    toast.success("You have been logged out successfully");
    navigate("/login");
  };

  if (loading || isLoggingOut) {
    return <ProfileLoader />;
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
      >
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          <div className="text-center text-red-500">
            <AlertCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Error</h2>
            <p>Failed to load user. Please try again later.</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!user) {
    return null; // or you could return a "User not found" message
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={handleLogoutClick}
          disabled={isLoggingOut}
        >
          <LogOut className="h-5 w-5" />
          <span className="sr-only">Logout</span>
        </Button>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-black mb-2">Your Profile</h2>
          <p className="text-gray-600">Manage your information</p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative">
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            {isEditing && (
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full bg-white shadow-md"
              >
                <Camera className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSave}
          className="space-y-6"
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              name="name"
              value={user.displayName}
              onChange={handleChange}
              placeholder="Name"
              className="pl-10 w-full border-gray-300 focus:border-black focus:ring-black rounded-md"
              required
              disabled={!isEditing}
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="pl-10 w-full border-gray-300 focus:border-black focus:ring-black rounded-md"
              required
              disabled={!isEditing}
            />
          </div>
          {isEditing ? (
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white rounded-md transition-colors duration-200"
            >
              Save Changes
            </Button>
          ) : (
            <Button
              onClick={handleEdit}
              className="w-full bg-black hover:bg-gray-800 text-white rounded-md transition-colors duration-200"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="outline"
            className="w-full border-gray-300 text-black hover:bg-gray-100 rounded-md transition-colors duration-200"
            onClick={handleShareProfile}
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Profile as Card
          </Button>
        </motion.div>
      </div>

      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={handleLogoutConfirm}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </motion.div>
  );
}