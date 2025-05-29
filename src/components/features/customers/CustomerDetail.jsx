"use client";

import { AddressSelect, Sections } from "@/components/common";
import { Detail } from "@/components/layout";
import { Input, InputField, Loading } from "@/components/ui";
import { dialog } from "@/lib/dialog";
import { fetchPOST } from "@/lib/fetcher";
import { Mail, MapPin, Phone, Shield, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

const CustomerDetail = ({ id }) => {
  const { data, isLoading, error, mutate } = useSWR(`/api/users/${id}`);
  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (address) => {
    setFormData((prev) => ({
      ...prev,
      ...address,
    }));
  };

  const handleSave = async () => {
    const isEqual = JSON.stringify(formData) === JSON.stringify(originalData);

    if (isEqual) {
      toast.error("Không có thay đổi");
      return;
    }

    const result = await fetchPOST(`/api/users/${id}`, formData);

    if (result?.status) {
      toast.success(result?.message);
      setOriginalData(formData);
    } else {
      toast.error(result?.message || "Sửa thất bại!");
    }
  };

  const handleDelete = async () => {
    const choosed = await dialog.confirm(
      "Do you want to delete this customer?"
    );
    choosed && toast.success("Không thể xoá Thượng Đế!");
  };

  useEffect(() => {
    if (data?.status && !isLoading) {
      const { full_name, email, phone, role, city, district, ward, address } =
        data?.data || {};
      const cleanData = {
        full_name,
        email,
        phone,
        role,
        city,
        district,
        ward,
        address,
      };
      setFormData(cleanData);
      setOriginalData(cleanData);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <p>Lỗi khi load customer</p>;

  return (
    <Detail
      title={"Customer Detail"}
      desc={"View customer details."}
      classChildren="grid grid-cols-1 md:grid-cols-2 gap-6"
      onSave={handleSave}
      onDelete={handleDelete}
    >
      <Sections className="!border-0 !p-0">
        <Input
          label="Full name"
          name="full_name"
          onChange={handleChange}
          value={formData?.full_name || ""}
          startIcon={<User size={16} strokeWidth={1.5} />}
        />
        <Input
          label="Email"
          name="email"
          onChange={handleChange}
          value={formData?.email || ""}
          startIcon={<Mail size={16} strokeWidth={1.5} />}
          readOnly={true}
        />
        <Input
          label="Phone"
          name="phone"
          onChange={handleChange}
          value={formData?.phone || ""}
          startIcon={<Phone size={16} strokeWidth={1.5} />}
          readOnly={true}
        />
        <InputField
          as="select"
          label="Role"
          name="role"
          onChange={handleChange}
          value={formData?.role || "select"}
          icon={Shield}
        >
          {["select", "admin", "user"].map((role) => (
            <option key={role} value={role}>
              {role.replace(/\b\w/g, (l) => l.toUpperCase())}
            </option>
          ))}
        </InputField>
      </Sections>
      <Sections className="!border-0 !p-0">
        <AddressSelect value={formData} onChange={handleAddressChange} />
        <Input
          label="Address"
          name="address"
          onChange={handleChange}
          value={formData?.address || ""}
          startIcon={<MapPin size={16} strokeWidth={1.5} />}
        />
      </Sections>
    </Detail>
  );
};

export default CustomerDetail;
