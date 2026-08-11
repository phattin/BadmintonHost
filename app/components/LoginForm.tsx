import Input from "./ui/input";
import Button from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Lock, Mail, LogIn } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="flex bg-white rounded-2xl w-250 h-159">
      <div className="relative w-[40%] h-full">
        <img
          className="absolute rounded-s-2xl inset-0 w-full h-full object-cover"
          src="/img_login.png"
          alt="Badminton"
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 flex h-full flex-col justify-between p-7 text-white">
          <div>
            <h2 className="text-xl font-bold">🏸 CauLongVL</h2>

            <p className="mt-2 text-sm">Quản lý sân dễ dàng hơn bao giờ hết.</p>

            <p className="mt-1 text-sm">
              Tham gia mạng lưới các chủ sân hàng đầu. Tối ưu hóa đặt lịch và
              tăng doanh thu của bạn.
            </p>
          </div>
          <div className="rounded-xl bg-white/20 border-white/50 border backdrop-blur-md shadow-md p-4 text-black">
            <p className="italic">
              "CauLongVL đã giúp tôi lắp đầy 90% lịch trống trong tháng qua."
            </p>
            <p className="mt-3">Nguyễn Văn A, Chủ sân VinaSport</p>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full p-12">
        <h2 className="font-extrabold text-5xl text-text">
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
    </div>
  );
}
