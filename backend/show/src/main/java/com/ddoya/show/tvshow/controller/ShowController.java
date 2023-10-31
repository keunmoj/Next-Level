package com.ddoya.show.tvshow.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/show")
public class ShowController {

    @GetMapping("/all")
    public ResponseEntity<String> test() {
        System.out.println("=------------test----------------------------");
        System.out.println("=------------test----------------------------");
        System.out.println("=------------test----------------------------");

        return ResponseEntity.ok("Test successful");
    }
}
