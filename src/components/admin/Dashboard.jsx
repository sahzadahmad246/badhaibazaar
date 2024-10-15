import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./../ui/Button";
import { Input } from "./../ui/Input";
import { Textarea } from "./../ui/TextAera";
import {
  Upload,
  Trash2,
  Edit,
  ChevronDown,
  ChevronUp,
  Share2,
  Menu,
} from "lucide-react";

const occasions = [
  {
    label: "Festivals",
    items: [
      {
        label: "Diwali",
        images: [
          {
            id: 1,
            src: "https://t.ly/VPVcD",
            title: "Diwali Lights",
            description: "Beautiful Diwali lamps",
          },
          {
            id: 2,
            src: "https://t.ly/VPVcD",
            title: "Rangoli",
            description: "Colorful Rangoli design",
          },
        ],
      },
      {
        label: "Christmas",
        images: [
          {
            id: 3,
            src: "https://t.ly/VPVcD",
            title: "Christmas Tree",
            description: "Decorated Christmas tree",
          },
          {
            id: 4,
            src: "https://t.ly/VPVcD",
            title: "Santa Claus",
            description: "Jolly Santa Claus figure",
          },
        ],
      },
      {
        label: "Eid",
        images: [
          {
            id: 11,
            src: "https://t.ly/VPVcD",
            title: "Eid Moon",
            description: "Crescent moon sighting for Eid",
          },
          {
            id: 12,
            src: "https://media.istockphoto.com/id/2018101881/photo/ramadan-kareem-photography-lantern-with-crescent-moon-shape-on-the-beach.jpg?s=1024x1024&w=is&k=20&c=lDFeA_QFFi0vNXj3aDayIf8Q2pbfpChNliISyiy_YFk=",
            title: "Eid Feast",
            description: "Traditional Eid feast setup",
          },
        ],
      },
      {
        label: "Holi",
        images: [
          {
            id: 13,
            src: "https://t.ly/VPVcD",
            title: "Holi Colors",
            description: "Vibrant colors for Holi celebration",
          },
          {
            id: 14,
            src: "https://t.ly/VPVcD",
            title: "Water Balloons",
            description: "Fun water balloons for Holi",
          },
        ],
      },
      {
        label: "Navratri",
        images: [
          {
            id: 15,
            src: "https://t.ly/VPVcD",
            title: "Garba Dance",
            description: "Traditional Garba dance during Navratri",
          },
          {
            id: 16,
            src: "https://t.ly/VPVcD",
            title: "Durga Idol",
            description: "Beautifully decorated Durga idol",
          },
        ],
      },
      {
        label: "Durga Puja",
        images: [
          {
            id: 17,
            src: "https://t.ly/VPVcD",
            title: "Durga Puja Pandals",
            description: "Decorated pandals during Durga Puja",
          },
          {
            id: 18,
            src: "https://t.ly/VPVcD",
            title: "Sindoor Khela",
            description: "Traditional Sindoor Khela event",
          },
        ],
      },
    ],
  },
  {
    label: "Special Days",
    items: [
      {
        label: "Friendship Day",
        images: [
          {
            id: 19,
            src: "https://t.ly/VPVcD",
            title: "Friendship Bracelets",
            description: "Colorful friendship bracelets",
          },
          {
            id: 20,
            src: "https://t.ly/VPVcD",
            title: "Friends Together",
            description: "Group of friends celebrating",
          },
        ],
      },
      {
        label: "Father's Day",
        images: [
          {
            id: 21,
            src: "https://t.ly/VPVcD",
            title: "Father and Child",
            description: "Heartwarming father-child moment",
          },
          {
            id: 22,
            src: "https://t.ly/VPVcD",
            title: "Father's Day Gift",
            description: "Gift wrapped for Father's Day",
          },
        ],
      },
      {
        label: "Mother's Day",
        images: [
          {
            id: 5,
            src: "https://t.ly/VPVcD",
            title: "Mother's Day Card",
            description: "Handmade card for Mother's Day",
          },
          {
            id: 6,
            src: "https://t.ly/VPVcD",
            title: "Mother and Child",
            description: "Loving embrace of mother and child",
          },
        ],
      },
      {
        label: "Valentine's Day",
        images: [
          {
            id: 23,
            src: "https://t.ly/VPVcD",
            title: "Heart-shaped Balloons",
            description: "Romantic heart-shaped balloons",
          },
          {
            id: 24,
            src: "https://t.ly/VPVcD",
            title: "Valentine's Roses",
            description: "Bouquet of red roses",
          },
        ],
      },
      {
        label: "Teacher's Day",
        images: [
          {
            id: 25,
            src: "https://t.ly/VPVcD",
            title: "Thank You Teacher",
            description: "Chalkboard with thank you note",
          },
          {
            id: 26,
            src: "https://t.ly/VPVcD",
            title: "Teacher's Day Gift",
            description: "Gift for Teacher's Day",
          },
        ],
      },
      {
        label: "Children's Day",
        images: [
          {
            id: 27,
            src: "https://t.ly/VPVcD",
            title: "Kids Playing",
            description: "Children playing together",
          },
          {
            id: 28,
            src: "https://t.ly/VPVcD",
            title: "Colorful Balloons",
            description: "Balloons for Children's Day celebration",
          },
        ],
      },
    ],
  },
  {
    label: "Anniversaries",
    items: [
      {
        label: "Wedding Anniversary",
        images: [
          {
            id: 7,
            src: "https://t.ly/VPVcD",
            title: "Wedding Rings",
            description: "Golden wedding rings",
          },
          {
            id: 8,
            src: "https://t.ly/VPVcD",
            title: "Anniversary Cake",
            description: "Elegant wedding anniversary cake",
          },
        ],
      },
      {
        label: "Work Anniversary",
        images: [
          {
            id: 29,
            src: "https://t.ly/VPVcD",
            title: "Office Celebration",
            description: "Workplace anniversary celebration",
          },
          {
            id: 30,
            src: "https://t.ly/VPVcD",
            title: "Award Trophy",
            description: "Award trophy for work anniversary",
          },
        ],
      },
      {
        label: "Relationship Milestones",
        images: [
          {
            id: 31,
            src: "https://t.ly/VPVcD",
            title: "Couple Holding Hands",
            description: "Romantic moment of a couple",
          },
          {
            id: 32,
            src: "https://t.ly/VPVcD",
            title: "Anniversary Date",
            description: "Couple celebrating their milestone",
          },
        ],
      },
      {
        label: "Business Anniversary",
        images: [
          {
            id: 33,
            src: "https://t.ly/VPVcD",
            title: "Business Party",
            description: "Celebration for business anniversary",
          },
          {
            id: 34,
            src: "https://t.ly/VPVcD",
            title: "Company Achievement",
            description: "Achievement plaque for business",
          },
        ],
      },
    ],
  },
  {
    label: "More",
    items: [
      {
        label: "Birthdays",
        images: [
          {
            id: 9,
            src: "https://t.ly/VPVcD",
            title: "Birthday Cake",
            description: "Colorful birthday cake with candles",
          },
          {
            id: 10,
            src: "https://t.ly/VPVcD",
            title: "Birthday Balloons",
            description: "Festive birthday balloons",
          },
        ],
      },
      {
        label: "Graduations",
        images: [
          {
            id: 35,
            src: "https://t.ly/VPVcD",
            title: "Graduation Cap",
            description: "Graduation cap with tassel",
          },
          {
            id: 36,
            src: "https://t.ly/VPVcD",
            title: "Diploma Scroll",
            description: "Rolled diploma scroll",
          },
        ],
      },
      {
        label: "Baby Showers",
        images: [
          {
            id: 37,
            src: "https://t.ly/VPVcD",
            title: "Baby Shower Cake",
            description: "Cute cake for baby shower",
          },
          {
            id: 38,
            src: "https://t.ly/VPVcD",
            title: "Baby Clothes",
            description: "Adorable baby clothes on a line",
          },
        ],
      },
      {
        label: "Retirements",
        images: [
          {
            id: 39,
            src: "https://t.ly/VPVcD",
            title: "Retirement Party",
            description: "Party decorations for retirement",
          },
          {
            id: 40,
            src: "https://t.ly/VPVcD",
            title: "Congratulations Card",
            description: "Card congratulating on retirement",
          },
        ],
      },
      {
        label: "New Job",
        images: [
          {
            id: 41,
            src: "https://t.ly/VPVcD",
            title: "New Job Congrats",
            description: "Celebratory card for new job",
          },
          {
            id: 42,
            src: "https://t.ly/VPVcD",
            title: "Desk Setup",
            description: "New desk setup for a fresh start",
          },
        ],
      },
    ],
  },
];

const DropdownCategory = ({
  category,
  isOpen,
  onClick,
  selectedItem,
  onItemClick,
}) => {
  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full p-2 text-left font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
        onClick={onClick}
      >
        {category.label}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {category.items.map((item) => (
              <button
                key={item.label}
                className={`block w-full text-left pl-4 py-2 text-sm ${
                  selectedItem.label === item.label
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => onItemClick(item)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Dashboard() {
  const [openCategory, setOpenCategory] = useState(occasions[0].label);
  const [selectedItem, setSelectedItem] = useState(occasions[0].items[0]);
  const [selectedImage, setSelectedImage] = useState(selectedItem.images[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSelectedImage(selectedItem.images[0]);
    setIsEditing(false);
  }, [selectedItem]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now(),
          src: e.target.result,
          title: "",
          description: "",
        };
        setSelectedItem((prevItem) => ({
          ...prevItem,
          images: [...prevItem.images, newImage],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (image, isEditMode = false) => {
    setSelectedImage(image);
    setIsEditing(isEditMode);
  };

  const handleImageUpdate = (field, value) => {
    const updatedImages = selectedItem.images.map((img) =>
      img.id === selectedImage.id ? { ...img, [field]: value } : img
    );
    setSelectedItem((prevItem) => ({ ...prevItem, images: updatedImages }));
    setSelectedImage({ ...selectedImage, [field]: value });
  };

  const handleImageDelete = (id) => {
    const updatedImages = selectedItem.images.filter((img) => img.id !== id);
    setSelectedItem((prevItem) => ({ ...prevItem, images: updatedImages }));
    if (selectedImage && selectedImage.id === id) {
      setSelectedImage(updatedImages[0] || null);
    }
  };

  const handleShareImage = () => {
    alert(`Sharing image: ${selectedImage.title}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-4 sm:p-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <Button
          variant="outline"
          size="icon"
          className="sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div
          className={`lg:col-span-1 bg-white p-6 rounded-lg shadow ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <h2 className="text-xl font-semibold mb-4">Occasions</h2>
          {occasions.map((category) => (
            <DropdownCategory
              key={category.label}
              category={category}
              isOpen={openCategory === category.label}
              onClick={() =>
                setOpenCategory(
                  openCategory === category.label ? null : category.label
                )
              }
              selectedItem={selectedItem}
              onItemClick={(item) => {
                setSelectedItem(item);
                setIsMobileMenuOpen(false);
              }}
            />
          ))}
        </div>
        <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-xl font-semibold mb-2 sm:mb-0">
              Image Management: {selectedItem.label}
            </h2>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button as="span" variant="outline" className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Image
                </Button>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[calc(100vh-240px)]">
            <div className="overflow-hidden h-full">
              <h3 className="text-lg font-medium mb-2">Image List</h3>
              <div
                className="space-y-2 overflow-y-auto pr-2 h-[calc(100%-2rem)]"
                style={{ scrollbarWidth: "thin" }}
              >
                {selectedItem.images.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center justify-between p-2 rounded ${
                      selectedImage && selectedImage.id === image.id
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <div
                      className="flex items-center flex-1 cursor-pointer"
                      onClick={() => handleImageSelect(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <div>
                        <p className="font-medium">
                          {image.title || "Untitled"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {image.description || "No description"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageSelect(image, true);
                        }}
                        className="mr-2"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageDelete(image.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Image Details</h3>
              {selectedImage ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  {isEditing ? (
                    <>
                      <Input
                        type="text"
                        placeholder="Image Title"
                        value={selectedImage.title}
                        onChange={(e) =>
                          handleImageUpdate("title", e.target.value)
                        }
                        className="mb-2"
                      />
                      <Textarea
                        placeholder="Image Description"
                        value={selectedImage.description}
                        onChange={(e) =>
                          handleImageUpdate("description", e.target.value)
                        }
                        rows={4}
                        className="mb-2"
                      />
                      <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <Button
                          onClick={() => setIsEditing(false)}
                          className="bg-black text-white w-full sm:w-auto"
                        >
                          Save Changes
                        </Button>
                        <Button
                          onClick={handleShareImage}
                          variant="outline"
                          className="w-full sm:w-auto"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Image
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="text-lg font-medium">
                        {selectedImage.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {selectedImage.description}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <Button
                          onClick={() => setIsEditing(true)}
                          className="bg-black text-white w-full sm:w-auto"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={handleShareImage}
                          variant="outline"
                          className="w-full sm:w-auto"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Image
                        </Button>
                      </div>
                    </>
                  )}
                </motion.div>
              ) : (
                <p>No images available for this occasion</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
