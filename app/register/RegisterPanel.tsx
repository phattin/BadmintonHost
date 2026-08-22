"use client";

import {useState} from "react";
import Input from "../components/ui/input";
import Select from "../components/ui/select";
import Button from "../components/ui/button";
import { User, Phone, Lock, Mail, Eye, EyeOff, Gauge } from "lucide-react";

export default function RegisterPanel() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
      <div className="w-[60%] h-full p-12">
        <h2 className="font-extrabold text-5xl text-button">
            Đăng ký
        </h2>
        <Input
        id="name"
        label="Họ và tên:"
        type="text"
        className="w-[60%]"
        placeholder="Nhập tên của bạn"
        icon={<User size={18} />}
        />
        <Input
          id="phone"
          label="Số điện thoại:"
          type="tel"
          inputMode="numeric"
          placeholder="Nhập số điện thoại của bạn"
          icon={<Phone size={18} />}
          onInput={(e) => {e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "")}}
        />  
        <Input
          id="email"
          label="Email:"
          type="email"
          placeholder="Nhập email của bạn"
          icon={<Mail size={18} />}
        />
        <Input
          id="password"
          label="Mật khẩu:"
          type={ showPassword ? "text" : "password" }
          placeholder="Nhập mật khẩu của bạn"
          icon={<Lock size={18} />}
          rightIcon={
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-placeholder">
              { showPassword ? (<EyeOff size={18} />): (<Eye size={18} />) }
            </button>
          }
        />
        <Input
          id="repassword"
          label="Xác nhận mật khẩu:"
          type={ showRePassword ? "text" : "password" }
          placeholder="Nhập lại mật khẩu của bạn"
          icon={<Lock size={18} />}
          rightIcon={
            <button type="button" onClick={() => setShowRePassword(!showRePassword)} className="cursor-pointer text-placeholder">
              { showRePassword ? (<EyeOff size={18} />): (<Eye size={18} />) }
            </button>
          }
        />

        <Button className="mt-3" >
        Đăng ký
        </Button>

        {/* Đăng ký */}
        <p className="mt-8 text-center text-sm text-gray-700">
            Đã có tài khoản?{" "}
            <a href="/login" className="font-semibold text-text hover:underline">
                Đăng nhập
            </a>
        </p>
      </div>
  );
}
