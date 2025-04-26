"use client";
import Input from "@/component/ui/Input";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Store,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SettingSection = ({ title, children }) => (
  <div className="flex flex-col gap-2 box">
    <h2 className="text-xl font-bold">{title}</h2>
    {children}
  </div>
);

const Setting = ({ data }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
    >
      <SettingSection title="Base infomation">
        <Input
          label="Site name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          startIcon={<Store size={16} strokeWidth={1.5} />}
        />
        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          type="textarea"
        />
      </SettingSection>
      <SettingSection title="Contact infomation">
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          startIcon={<Mail size={16} strokeWidth={1.5} />}
        />
        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          startIcon={<Phone size={16} strokeWidth={1.5} />}
        />
        <Input
          label="Location"
          name="address"
          value={formData.address}
          onChange={handleChange}
          startIcon={<MapPin size={16} strokeWidth={1.5} />}
        />
      </SettingSection>
      <SettingSection title="Social infomation">
        <Input
          label="Facebook"
          name="facebook"
          value={formData.facebook || ""}
          onChange={handleChange}
          startIcon={<Facebook size={16} strokeWidth={1.5} />}
        />
        <Input
          label="Instagram"
          name="instagram"
          value={formData.instagram || ""}
          onChange={handleChange}
          startIcon={<Instagram size={16} strokeWidth={1.5} />}
        />
        <Input
          label="Youtube"
          name="youtube"
          value={formData.youtube || ""}
          onChange={handleChange}
          startIcon={<Youtube size={16} strokeWidth={1.5} />}
        />
      </SettingSection>
    </motion.div>
  );
};

export default Setting;
