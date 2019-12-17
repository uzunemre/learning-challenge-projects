package com.tutorial.jwt;

import com.tutorial.jwt.model.User;

class TestUtil {

    static User createValidUser() {
        User user = new User();
        user.setUsername("test-user");
        user.setPassword("P4ssword");
        return user;
    }

}
