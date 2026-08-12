import Input from "./ui/input";
import Button from "./ui/button";
import AuthCard from "./AuthCard";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Eye, Lock, Mail, LogIn } from "lucide-react";

export default function LoginPanel() {
  return (
      <div className="w-[60%] h-full p-12">
        <h2 className="font-extrabold text-5xl text-button">
            Đăng Nhập
        </h2>
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
        <a className="flex w-fit mt-3 ml-auto text-text font-bold" href="#">Quên mật khẩu</a>

        <Button className="mt-3" icon={<LogIn size={18} />}>
        Đăng nhập
        </Button>

        <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="text-sm text-gray-500">
                Hoặc tiếp tục với
            </span>

            <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="mt-5 flex gap-4">
            <button
                type="button"
                className="
                flex flex-1
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-gray-300
                bg-white
                py-3
                text-sm
                font-semibold
                text-black
                cursor-pointer
                transition
                hover:bg-gray-50
                "
            >
                <FcGoogle size={20} />
                Google
            </button>

            <button
                type="button"
                className="
                flex flex-1
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-gray-300
                bg-white
                py-3
                text-sm
                font-semibold
                text-black
                cursor-pointer
                transition
                hover:bg-gray-50
                "
            >
                <FaFacebook
                size={20}
                className="text-blue-600"
                />
                Facebook
            </button>
        </div>

        {/* Đăng ký */}
        <p className="mt-8 text-center text-sm text-gray-700">
            Chưa có tài khoản?{" "}
            <a href="/register" className="font-semibold text-text hover:underline">
                Đăng ký ngay
            </a>
        </p>
      </div>
  );
}
