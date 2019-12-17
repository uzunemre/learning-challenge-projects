package com.tutorial.jwt.security;

class SecurityConstants {

    static final String SIGN_UP_URL = "/user/sign-up";
    static final String SECRET = "EmakinaTalent";
    static final long EXPIRATION_TIME = 432_000_000; // 5 gün
    static final String TOKEN_PREFIX = "Bearer ";
    static final String HEADER_STRING = "Authorization";
}
