import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, AlertCircle } from "lucide-react";

const menuItems = [
  {
    label: "Festivals",
    items: [
      { label: "Diwali", path: "/festivals/diwali" },
      { label: "Eid", path: "/festivals/eid" },
      { label: "Christmas", path: "/festivals/christmas" },
      { label: "Holi", path: "/festivals/holi" },
      { label: "Navratri", path: "/festivals/navratri" },
      { label: "Durga Puja", path: "/festivals/durga-puja" },
    ],
  },
  {
    label: "Special Days",
    items: [
      { label: "Friendship Day", path: "/special-days/friendship-day" },
      { label: "Father's Day", path: "/special-days/fathers-day" },
      { label: "Mother's Day", path: "/special-days/mothers-day" },
      { label: "Valentine's Day", path: "/special-days/valentines-day" },
      { label: "Teacher's Day", path: "/special-days/teachers-day" },
      { label: "Children's Day", path: "/special-days/childrens-day" },
    ],
  },
  {
    label: "Anniversaries",
    items: [
      { label: "Wedding Anniversary", path: "/anniversaries/wedding" },
      { label: "Work Anniversary", path: "/anniversaries/work" },
      { label: "Relationship Milestones", path: "/anniversaries/relationship" },
      { label: "Business Anniversary", path: "/anniversaries/business" },
    ],
  },
  {
    label: "More",
    items: [
      { label: "Birthdays", path: "/more/birthdays" },
      { label: "Graduations", path: "/more/graduations" },
      { label: "Baby Showers", path: "/more/baby-showers" },
      { label: "Retirements", path: "/more/retirements" },
      { label: "New Job", path: "/more/new-job" },
    ],
  },
];

const OccasionCard = ({ label, path }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <a href={path} className="block">
      <img
        src={`https://t.ly/VPVcD`}
        alt={label}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
        <p className="text-lg fs-5 text-gray-800">{"(10+)"}</p>
      </div>
    </a>
  </motion.div>
);

const NoOccasionsFound = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg"
  >
    <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
    <h3 className="text-2xl font-semibold text-gray-700 mb-2">No occasions found</h3>
    <p className="text-gray-500 text-center">Try adjusting your search or explore our other categories</p>
  </motion.div>
);

const OccasionCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(menuItems);

  useEffect(() => {
    const filtered = menuItems
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
    setFilteredItems(filtered);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Occasion</h1>
            <p className="text-xl md:text-2xl opacity-90">Discover beautiful posters for every special moment</p>
          </div>
          <div className="w-full md:w-1/2 max-w-md relative">
            <input
              type="text"
              placeholder="Search occasions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-lg border-2 border-white bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-6 h-6" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {filteredItems.length === 0 ? (
          <NoOccasionsFound />
        ) : (
          filteredItems.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {category.label}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <OccasionCard {...item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default OccasionCards;