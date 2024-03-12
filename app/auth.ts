import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import AppleProvider from "next-auth/providers/apple";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  // pages: {
  //   signIn: "/login",
  // },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
    }),
  ],
  // callbacks: {
  //   async signIn({ user }) {
  //     const { name, email, image } = user;

  //     const response = await fetch("http://localhost:8000/auth/login", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         image,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) return false;

  //     return true;
  //   },
  // },
  // callbacks: {
  //   async jwt({ token, account, user }) {
  //     // 초기 로그인시 User 정보를 가공해 반환
  //     if (account && user) {
  //       console.log("callback");
  //       console.log(account);
  //       return {
  //         accessToken: account.access_token,
  //         accessTokenExpires: account.expires_at,
  //         refreshToken: account.refresh_token,
  //         user,
  //       };
  //     }
  //     return token;
  //   },
  // },

  secret: process.env.AUTH_SECRET,
});
