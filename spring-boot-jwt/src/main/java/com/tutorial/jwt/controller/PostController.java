package com.tutorial.jwt.controller;

import com.tutorial.jwt.model.Post;
import com.tutorial.jwt.repository.PostRepository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    private PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @PostMapping
    public void addPost(@RequestBody Post post) {
        postRepository.save(post);
    }

    @GetMapping
    @RequestMapping("/list")
    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    @PutMapping("/{id}")
    public void editPost(@PathVariable long id, @RequestBody Post post) {
        Post existingPost = postRepository.getOne(id);
        Assert.notNull(existingPost, "Post not found");
        existingPost.setDescription(post.getDescription());
        postRepository.save(existingPost);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable long id) {
        postRepository.deleteById(id);
    }
}
