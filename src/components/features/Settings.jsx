"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Save,
  Store,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import useSWR from "swr";
import { fetchPOST } from "@/lib/fetcher";
import toast from "react-hot-toast";
import { Input, Loading } from "../ui";
import { Sections } from "../common";

const Settings = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/site");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    facebook: "",
    instagram: "",
    youtube: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const obj = Object.fromEntries(form);

    const result = await fetchPOST("/api/site", obj);

    if (result?.status) {
      mutate();
      toast.success(result?.message);
    } else {
      toast.error(result?.message || "Sửa thất bại!");
    }
  };

  useEffect(() => {
    if (data?.status) {
      setFormData(data?.data || []);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load setting</p>;

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
      onSubmit={handleSubmit}
    >
      <Sections title="Base infomation">
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
      </Sections>
      <Sections title="Contact infomation">
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
      </Sections>
      <Sections title="Social infomation">
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
      </Sections>
      <motion.div className="flex justify-end items-start">
        <Button
          icon={<Save size={16} strokeWidth={1.5} />}
          title={"Save"}
          isActive={true}
          titleClassName={"!block"}
        />
      </motion.div>
    </motion.form>
  );
};

export default Settings;
