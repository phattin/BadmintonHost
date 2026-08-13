import Input from "./ui/input";
import Select from "./ui/select";
import Button from "./ui/button";
import AuthCard from "./AuthCard";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { User, Phone, UserPlus, Lock, Mail, Eye, EyeOff, Gauge } from "lucide-react";

export default function RegisterPanel() {
  return (
      <div className="w-[60%] h-full p-12">
        <h2 className="font-extrabold text-5xl text-button">
            Đăng ký
        </h2>
        <div className="flex gap-5">
            <Input
            id="name"
            label="Họ và tên:"
            type="text"
            className="w-[60%]"
            placeholder="Nhập tên của bạn"
            icon={<User size={18} />}
            />
            <Select
            id="level"
            label="Trình độ:"
            className="w-[40%]"
            icon={<Gauge size={18} />}
            defaultValue=""
            >
                <option value="" disabled>
                    Chọn trình độ
                </option>
                <option value="Newbie">
                    Newbie
                </option>
                <option value="Y">
                    Yếu
                </option>
            </Select>
        </div>
        <Input
          id="phone"
          label="Số điện thoại:"
          type="number"
          placeholder="Nhập số điện thoại của bạn"
          icon={<Phone size={18} />}
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
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          icon={<Lock size={18} />}
          rightIcon={<Eye size={18} />}
        />
        <Input
          id="repassword"
          label="Xác nhận mật khẩu:"
          type="password"
          placeholder="Nhập lại mật khẩu của bạn"
          icon={<Lock size={18} />}
          rightIcon={<Eye size={18} />}
        />

        <Button className="mt-3" icon={<UserPlus size={18} />}>
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
