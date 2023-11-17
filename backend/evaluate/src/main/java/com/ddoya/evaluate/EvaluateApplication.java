package com.ddoya.evaluate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class EvaluateApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvaluateApplication.class, args);
	}

}
