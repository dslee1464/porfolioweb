import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    appDir: true, // ✅ App Router 사용 설정
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
